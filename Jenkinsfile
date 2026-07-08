pipeline {
    agent {
        label 'ubuntu'
    }

    environment {
        IMAGE_NAME = 'portfolio-frontend'
        CONTAINER_NAME = 'portfolio-frontend'
        PORT = '8083'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t ${IMAGE_NAME}:latest .'
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                    docker run -d \
                      --name ${CONTAINER_NAME} \
                      -p ${PORT}:80 \
                      --restart unless-stopped \
                      ${IMAGE_NAME}:latest
                '''
            }
        }

    }

    post {

        success {
            echo 'Portfolio deployed successfully!'
        }

        failure {
            echo 'Portfolio deployment failed.'
        }

        always {
            sh 'docker image prune -f || true'
        }
    }
}
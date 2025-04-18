pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/iamvivekchavan/todo-jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop todo-app || true
                    docker rm todo-app || true
                    docker run -d --name todo-app -p 3000:3000 todo-app
                '''
            }
        }
    }
}

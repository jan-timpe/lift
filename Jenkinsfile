pipeline {
    agent {
        docker {
            image 'node:alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'apk update && apk add openssh-client'
                sh 'npm install -g yarn'
            }
        }
        stage('Build') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Test') {
            steps {
                sh 'CI=true yarn test'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy'
            }
        }
    }
}
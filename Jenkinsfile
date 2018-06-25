pipeline {
    agent {
        docker {
            image 'node:alpine'
            args '-p 3000:3000 -u root:root'
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
            script {
                sshagent(credentials: ['eff3f854-c883-4628-9752-d02a9aaddec1']) {
                    sh 'ssh root@lift.jantimpe.com "cd ~/lift.jantimpe.com && git pull && ./deploy"'
                }
            }
        }
    }
}
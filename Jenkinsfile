pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'yarn'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'yes | cp -rf ./build/* /var/www/mozilla.cz/voice/'
      }
    }
  }
}

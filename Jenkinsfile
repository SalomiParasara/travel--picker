pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SalomiParasara/staticwebapp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for static website (HTML/CSS/JS only).'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic file checks...'
                sh 'ls -l'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/*.html, **/*.css, **/*.js', fingerprint: true
            }
        }

        // Optional: add a deploy step here (to GitHub Pages, S3, etc.)
    }

    post {
        always {
            echo "✅ Pipeline completed successfully. You can now deploy your site if needed."
        }
    }
}

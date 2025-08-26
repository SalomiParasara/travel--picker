pipeline {
    agent any

    environment {
        IMAGE_NAME     = "webapp-cicd"
        IMAGE_TAG      = "v${env.BUILD_NUMBER}"
        FULL_IMAGE     = "${IMAGE_NAME}:${IMAGE_TAG}"
        LATEST_IMAGE   = "${IMAGE_NAME}:latest"
        CONTAINER_NAME = "webapp_cicd"
        HOST_PORT      = "8000"
        PROBE_URL      = "http://localhost:8000/healthz"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "No build needed (static website: HTML, CSS, JS)"
            }
        }

        stage('Test') {
            steps {
                echo "Running basic checks..."
                sh 'ls -l'
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                echo "🚀 Deploying to GitHub Pages..."
                withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) {
                    sh """
                    git config user.name "Jenkins CI"
                    git config user.email "ci-bot@example.com"
                    git remote set-url origin https://$GIT_USER:$GIT_PASS@github.com/Eramsherasiya/quotes.git

                    # Clean old worktrees
                    git worktree prune

                    # Use a unique worktree folder per build
                    WORKTREE_DIR="/tmp/gh-pages-${BUILD_NUMBER}"
                    rm -rf \$WORKTREE_DIR
                    git worktree add -f \$WORKTREE_DIR gh-pages

                    # Copy all website files
                    cp -r index.html styles.css script.js assets/ \$WORKTREE_DIR/ 2>/dev/null || true
                    cd \$WORKTREE_DIR

                    git add .
                    git commit -m "Deploy from Jenkins build ${BUILD_NUMBER}" || echo "No changes to commit"
                    git push origin gh-pages
                    """
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build and deployment succeeded!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}

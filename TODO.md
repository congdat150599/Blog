app/
  models/
    - PostModel.php
      + selectPosts(query) 
      + insertPost(query)
  controllers/
    - PostController.php
      + getPopularPosts(amount)
      + getAdminPosts(id)
      + getAllPosts(amount, conditions)
      + postNewArticle()
  views/ 
    - PostView.php
      + showPosts(amount)
      + showUserPosts(userID, amount)
      + showPopularPosts(amount)

index.php
  <?php showPosts(indexLimit) ?>

admin.php
  <?php showUserPosts(id, limit) ?>
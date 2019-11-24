# Conduit-API - Documentation


## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#authentication)Authentication

`POST /api/users/login`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#registration)Registration

`POST /api/users`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#get-current-user)Get Current User

`GET api/user`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#update-user)Update User

`PUT api/user`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#get-profile)GET Profile

`GET /api/profiles/:username`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#follow-user)Follow User

`POST /api/profiles/:username/follow`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#unfollow-user)Unfollow User

`DELETE /api/profiles/:username/follow`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#list-articles)List Articles

`GET /api/articles`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#feed-articles)Feed Articles

`GET /api/articles/feed`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#get-article)Get Article

`GET /api/articles/:slug`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#create-article)Create Article

`POST /api/articles`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#update-article)Update Article

`PUT /api/articles/:slug`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#delete-article)Delete Article

`DELETE /api/articles/:slug`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#add-comments-to-an-article)Add Comments to an Article

`POST /api/articles/:slug/comments`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#get-comment-from-an-article)Get Comment from an article

`GET /api/articles/:slug/comments`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#delete-comment)Delete Comment

`DELETE /api/articles/:slug/comments/:id`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#favorite-article)Favorite Article

`POST /api/articles/:slug/favorite`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#unfavorite-article)Unfavorite Article

`DELETE /api/articles/:slug/favorite`  

## [](https://github.com/Swastikyadav/Conduit-Real-world-Bloging-App#get-tags)Get Tags

`GET /api/tags`

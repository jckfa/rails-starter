# Rails Starter
*custom boilerplate rails app*

### Summary
- uses both webpack and sprockets
- webpack-dev-server (automatic page reloading—only for assets though)
- css is extracted from js to separate file
- postcss-cssnext
- haml
- postgresql
- puma
- no jquery dependency
- global settings (see config/settings.yml)

### Setup
```
$ bundle install
$ yarn init
$ yarn
$ rails secret
set SECRET_KEY_BASE var
rename db names in database.yml
$ git init
$ rails db:create
$ foreman start
$ open http://localhost:5000
```

### To Do
- add es6 and jsx loaders
- set up asynchronous webfont loading
- set up React (probably in a separate boilerplate)
- capistrano?
- set up production task(s)
- auto-page-reloading on view changes—is that possible?
- seo meta tags (open graph, twitter)
- normalize styles

### Notes
- whereas `webpack --watch` compiles to disk (updates the app/assets/build folder on changes), webpack-dev-server does not
- uncomment config/puma.rb in gitignore when deploying (and add production puma.rb on server)


### Research (for future reference)
- [webpack, cssnext, asynchronous webfont loading][1]
- [enable delete requests without jquery dependency][2]

[1]: https://blog.madewithenvy.com/webpack-2-postcss-cssnext-fdcd2fd7d0bd#.x7fsh0fc6
[2]: https://www.viget.com/articles/delete-in-rails-without-jquery-and-ujs

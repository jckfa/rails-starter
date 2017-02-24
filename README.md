# Rails Starter
*custom boilerplate rails app*

### Summary
- uses both webpack and sprockets
- css is extracted from js to separate file
- webpack-dev-server (automatic page reloading)
- postcss-cssnext
- haml
- postgresql
- puma

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

### Notes
- whereas `webpack --watch` compiles to disk (updates the app/assets/build folder on changes), webpack-dev-server does not
- uncomment config/puma.rb in gitignore when deploying (and add production puma.rb on server)

%w(
  .ruby-version
  .rbenv-vars
  tmp/restart.txt
  tmp/caching-dev.txt
  config/settings.local.yml
  config/settings.yml
  config/settings/
).each { |path| Spring.watch(path) }

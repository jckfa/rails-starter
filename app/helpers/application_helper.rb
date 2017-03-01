module ApplicationHelper

  def development?
    Rails.env.development?
  end

  def production?
    Rails.env.production?
  end

  def title(page_title = '')
    site_title = Settings.site.name
    page_title.empty? ? site_title : "#{site_title}—#{page_title}"
  end

end

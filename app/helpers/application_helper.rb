module ApplicationHelper

  def development?
    Rails.env.development?
  end

  def production?
    Rails.env.production?
  end

end

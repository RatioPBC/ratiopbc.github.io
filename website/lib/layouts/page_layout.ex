defmodule Website.PageLayout do
  use Tableau.Layout, layout: Website.RootLayout
  use Phoenix.Component

  def template(assigns) do
    ~H"""
    {{:safe, render(@inner_content)}}
    """
  end
end

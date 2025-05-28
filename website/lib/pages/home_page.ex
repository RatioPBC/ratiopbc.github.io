defmodule Website.HomePage do
  use Tableau.Page,
    layout: Website.RootLayout,
    permalink: "/"

  use Phoenix.Component

  def template(assigns) do
    ~H"""
    <p>
      hello, world!
    </p>
    """
  end
end

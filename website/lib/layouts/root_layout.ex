defmodule Website.RootLayout do
  use Tableau.Layout
  use Phoenix.Component

  def template(assigns) do
    ~H"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http_equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ratio PBC | Modern software and data solutions for public sector</title>
        <meta name="description" content="We design, build, and operate secure, resilient, human-centered software and data systems for public sector organizations and specialized industries.">
        <!-- <script src="https://cdn.tailwindcss.com"></script> -->

        <title>
          {[@page[:title], Website]
          |> Enum.filter(& &1)
          |> Enum.intersperse("|")
          |> Enum.join(" ")}
        </title>

        <link rel="stylesheet" href="/css/site.css" />
      </head>

      <body class="font-body text-gray-900 bg-white">
        <!-- Navigation -->
        <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
              <div class="flex items-center">
                <div class="text-2xl font-bold text-slate-800">Ratio PBC</div>
              </div>
              <div class="hidden md:flex space-x-8">
                <a href="#services" class="text-slate-600 hover:text-slate-800 transition-colors">Services</a>
                <a href="#approach" class="text-slate-600 hover:text-slate-800 transition-colors">Approach</a>
                <a href="#work" class="text-slate-600 hover:text-slate-800 transition-colors">Work</a>
                <a href="#contact" class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">Get in touch</a>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {render(@inner_content)}
        </main>
        <!-- Footer -->
        <footer class="bg-ratio-navy text-white py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <div class="text-2xl font-bold mb-4">Ratio PBC</div>
              <p class="text-blue-200 mb-6">Modern software and data solutions for public sector</p>
              <div class="text-blue-300 text-sm">
                © 2025 Ratio PBC. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        <script>
          // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        </script>
      </body>

      <%= if Mix.env() == :dev do %>
        {Phoenix.HTML.raw(Tableau.live_reload(assigns))}
      <% end %>
    </html>
    """
    |> Phoenix.HTML.Safe.to_iodata()
  end
end

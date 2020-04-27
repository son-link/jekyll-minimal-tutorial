---
layout: page
title: About
permalink: /about/
---

[Jekyll-minimal-tutorial](https://son-link.github.io/jekyll-minimal-tutorial) is my new Jekyll theme for my [blog (in spanish)](https://son-link.github.io)

This theme is lighwight and responsive, including tables, images, videos and iframes, like **Youtube** and **Vimeo** and make for blogs dedicated to publish a losts of tutorials.

Include support for jekyll-seo-tag, Google Analytics, and include links on any post for share on various social networks, WhatsApp and Telegram.

![GitHub All Releases](https://img.shields.io/github/downloads/son-link/jekyll-minimal-titorial/total?style=flat-square&label=Github%20downloads)
![Gem](https://img.shields.io/gem/dt/jekyll-minimal-tutorial?label=GEM%20downloads&style=flat-square)

![Capture](/screenshot.png)

## Installation

Add this lines to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-minimal-tutorial"
gem "jekyll-paginator" # This line isn't necessary if you use github-pages
gem "jekyll-seo-tag" # If you can use this plugin
```

Add this lines to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-minimal-tutorial
plugins:
- jekyll-paginate
- jekyll-seo-tag #if you use this.
paginate: 10 # Posts per page
paginate_path: "page:num/"
```

Rename **index.md** to **index.html** and change **layout** to *home*

For search create a new file on the site root foolder called **search.json** with this content:

```plain
---
---
[
  {% raw%}
  {% for post in site.posts %}
    {

      "title"    : "{{ post.title | strip_html | escape }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "category" : "{{post.categories | join: ', '}}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "date"     : "{{ post.date }}",
      "description" : "{{post.description | strip_html | strip_newlines | escape }}"

    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
{% endraw %}
]
```
**Note**: You can change **post.description** to **post.content**, but innsert description is much better, use post.content only create a big file and also inaccurate search result.

And then execute:

```sh
$ bundle install
```
Or install it yourself as:
```sh
$ gem install jekyll-minimal-dark-orange
```

## Usage

### Social links:

For activate social links add these lines on your _config.yml:

```yaml
social_links: true  # If true show social links
rss: true # For add icon to link feed.xml
facebook:
git:
gitlab:
github:
instagram:
linkedin:
pinterest:
reddit:
spotify:
steam:
telegram:
twitch:
twitter:
vimeo:
youtube:
```
Just add the ones you're going to use.

### Responsive iframe for Youtube or Vimeo videos:

Insert the iframe code into a div whit the class **video** and remove **width** and **height** attributes, like this:

```html
<div class="video">
  <iframe  src="https://www.youtube.com/embed/<videoID>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```

### Google Analytics:
For use Google Analytics include this line  on **_config.yml** and replace &lt;code> for your Google Analytics code:

```yaml
google-analytics: <code>
```
Where &lt;code> is your Google Analytics code.

### jekyll-seo-tag:
For use you only need add this plugin on the plugins array on **_config.yml**

### Exclude pages on menu:
If you want a page not appear in the menu, simply add this is the YAML header on the desired pages:

```yaml
onmenu: false
```

### Custom 404 page error:
For add custom 404 page create a new page in your site root folder called **404.md** or **404.html** start width this yaml head:

```yaml
---
layout: 404
permalink: /404.html
---
```

## Other credits:

* [MicroCSS.css](https://son-link.github.io/microcss) my own lightweight CSS framework.
* [Fontello](http://fontello.com/) and [Material Design Icons](https://materialdesignicons.com/) for make the icon font.
* [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search) for search. Thans to [Webjeda](https://blog.webjeda.com/instant-jekyll-search/) for the tutorial.
* Syntax highlighting theme is base16.monokai.dark, include on [Rouge](https://github.com/rouge-ruby/rouge)

## License

The theme is available as open source under the terms of the [GNU/GPL3](https://opensource.org/licenses/GPL-3.0).

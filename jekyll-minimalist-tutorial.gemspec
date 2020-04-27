# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-minimalist-tutorial"
  spec.version       = "0.1.0"
  spec.authors       = ["Alfonso Saavedra \"Son Link\""]
  spec.email         = ["sonlink.dourden@gmail.com"]

  spec.summary       = "A simple and clear theme for Jekyll, ideal if you write tutorials"
  spec.homepage      = "https:/son-link.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 2"
  spec.add_development_dependency "rake", "~> 12.0"
end

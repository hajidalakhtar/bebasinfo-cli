# Documentation: https://docs.brew.sh/Formula-Cookbook
#                https://rubydoc.brew.sh/Formula
class Bebasinfo < Formula
  desc "Dapatkan berita terbaru. - CLI"
  homepage "https://github.com/hajidalakhtar/bebasinfo-cli/releases/tag/v0.0.1"
  url "https://github.com/hajidalakhtar/bebasinfo-cli/releases/download/v0.0.1/bebasinfo.tar.gz"
  sha256 "f6fe53638f21da2ca64af3a7ec4fae16379d83405d862005a4a82882d529398e"
  license "MIT"
  version "0.0.1"

  # depends_on "cmake" => :build

  def install
    bin.install "bebasinfo"
  end
end

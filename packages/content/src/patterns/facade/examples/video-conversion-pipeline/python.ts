import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Video conversion pipeline",
  code: `class Decoder:
    def decode(self, file):
        return f"decoded:{file}"

class Transcoder:
    def transcode(self, data):
        return f"transcoded:{data}"

class Packager:
    def package_video(self, data):
        return f"packaged:{data}"

class VideoFacade:
    def __init__(self, decoder, transcoder, packager):
        self.decoder = decoder
        self.transcoder = transcoder
        self.packager = packager

    def convert(self, file):
        decoded = self.decoder.decode(file)
        transcoded = self.transcoder.transcode(decoded)
        return self.packager.package_video(transcoded)

facade = VideoFacade(Decoder(), Transcoder(), Packager())
facade.convert("movie.mov")`,
  explanation:
    "Hide decode, transcode, and packaging behind one conversion call.",
};
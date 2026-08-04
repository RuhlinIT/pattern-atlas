import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Video conversion pipeline",
  code: `class Decoder {
    String decode(String file) {
        return "decoded:" + file;
    }
}

class Transcoder {
    String transcode(String data) {
        return "transcoded:" + data;
    }
}

class Packager {
    String packageVideo(String data) {
        return "packaged:" + data;
    }
}

class VideoFacade {
    private final Decoder decoder;
    private final Transcoder transcoder;
    private final Packager packager;

    VideoFacade(Decoder decoder, Transcoder transcoder, Packager packager) {
        this.decoder = decoder;
        this.transcoder = transcoder;
        this.packager = packager;
    }

    String convert(String file) {
        String decoded = decoder.decode(file);
        String transcoded = transcoder.transcode(decoded);
        return packager.packageVideo(transcoded);
    }
}

VideoFacade facade = new VideoFacade(new Decoder(), new Transcoder(), new Packager());
facade.convert("movie.mov");`,
  explanation:
    "Hide decode, transcode, and packaging behind one conversion call.",
};
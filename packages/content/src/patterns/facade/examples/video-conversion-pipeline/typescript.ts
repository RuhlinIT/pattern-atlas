import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class Decoder {
  decode(file: string) {
    return `decoded:${file}`;
  }
}

class Transcoder {
  transcode(data: string) {
    return `transcoded:${data}`;
  }
}

class Packager {
  package(data: string) {
    return `packaged:${data}`;
  }
}

class VideoFacade {
  constructor(
    private decoder: Decoder,
    private transcoder: Transcoder,
    private packager: Packager,
  ) {}

  convert(file: string) {
    const decoded = this.decoder.decode(file);
    const transcoded = this.transcoder.transcode(decoded);
    return this.packager.package(transcoded);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Video conversion pipeline",
  code: `class Decoder {
  decode(file: string) {
    return \`decoded:\${file}\`;
  }
}

class Transcoder {
  transcode(data: string) {
    return \`transcoded:\${data}\`;
  }
}

class Packager {
  package(data: string) {
    return \`packaged:\${data}\`;
  }
}

class VideoFacade {
  constructor(
    private decoder: Decoder,
    private transcoder: Transcoder,
    private packager: Packager,
  ) {}

  convert(file: string) {
    const decoded = this.decoder.decode(file);
    const transcoded = this.transcoder.transcode(decoded);
    return this.packager.package(transcoded);
  }
}

const facade = new VideoFacade(new Decoder(), new Transcoder(), new Packager());
facade.convert("movie.mov");`,
  explanation:
    "Hide decode, transcode, and packaging behind one conversion call.",
};
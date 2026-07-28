import type { PatternRecord } from "@atlas-patterns/schemas";

export const FacadePattern: PatternRecord = {
  slug: "facade",
  name: "Facade",
  category: "Structural",
  problem:
    "A client needs to perform a recurring workflow that spans several subsystem classes, but direct coordination makes the code noisy and tightly coupled.",
  intent:
    "Provide a simplified high-level interface that coordinates a complex subsystem behind a smaller and easier-to-use API.",
  tradeoffs: [
    "Can become a dumping ground if boundaries are unclear",
    "May obscure useful lower-level capabilities from advanced consumers",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Applications", "APIs", "Service layers"],
  integrationNotes:
    "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
  scenarios: [
    {
      slug: "checkout-workflow",
      title: "Checkout workflow",
      summary:
        "A checkout facade exposes one placeOrder call while coordinating authentication, payment, inventory, and notification subsystems.",
      languageExamples: [
        {
            language: "TypeScript",
            code: `class AuthService {
                    authenticate(userId: string): boolean {
                        console.log(\`Authenticating \${userId}\`);
                        return true;
                    }
                }

                class PaymentService {
                    charge(userId: string, amount: number): void {
                        console.log(\`Charging \${userId} $\${amount}\`);
                    }
                }

                class InventoryService {
                    reserve(itemId: string): void {
                        console.log(\`Reserving item \${itemId}\`);
                    }
                }

                class NotificationService {
                    sendConfirmation(userId: string): void {
                        console.log(\`Sending confirmation to \${userId}\`);
                    }
                }

                class CheckoutFacade {
                    constructor(
                        private auth = new AuthService(),
                        private payment = new PaymentService(),
                        private inventory = new InventoryService(),
                        private notifications = new NotificationService(),
                    ) {}

                    placeOrder(userId: string, itemId: string, amount: number): void {
                        if (!this.auth.authenticate(userId)) {
                            throw new Error("Authentication failed");
                        }

                        this.inventory.reserve(itemId);
                        this.payment.charge(userId, amount);
                        this.notifications.sendConfirmation(userId);
                    }
                }

                const checkout = new CheckoutFacade();
                checkout.placeOrder("user-42", "book-7", 39.99);`,
            explanation:
                "The client calls one facade method, while the facade coordinates authentication, reservation, payment, and confirmation in the correct order.",
        },
        {
            language: "Java",
            code: 
                `class AuthService {
                    public boolean authenticate(String userId) {
                        System.out.println("Authenticating " + userId);
                        return true;
                    }
                }

                class PaymentService {
                    public void charge(String userId, double amount) {
                        System.out.println("Charging " + userId + " $" + amount);
                    }
                }

                class InventoryService {
                    public void reserve(String itemId) {
                        System.out.println("Reserving item " + itemId);
                    }
                }

                class NotificationService {
                    public void sendConfirmation(String userId) {
                        System.out.println("Sending confirmation to " + userId);
                    }
                }

                class CheckoutFacade {
                    private final AuthService auth = new AuthService();
                    private final PaymentService payment = new PaymentService();
                    private final InventoryService inventory = new InventoryService();
                    private final NotificationService notifications = new NotificationService();

                    public void placeOrder(String userId, String itemId, double amount) {
                        if (!auth.authenticate(userId)) {
                            throw new RuntimeException("Authentication failed");
                        }

                        inventory.reserve(itemId);
                        payment.charge(userId, amount);
                        notifications.sendConfirmation(userId);
                    }
                }

                CheckoutFacade checkout = new CheckoutFacade();
                checkout.placeOrder("user-42", "book-7", 39.99);`,
            explanation:
                "The facade hides the multi-step checkout workflow so the client depends on one high-level API instead of four subsystem classes.",
        },
        {
            language: "Python",
            code: 
                `class AuthService:
                    def authenticate(self, user_id: str) -> bool:
                        print(f"Authenticating {user_id}")
                        return True

                class PaymentService:
                    def charge(self, user_id: str, amount: float) -> None:
                        print(f"Charging {user_id} \${amount}")
                class InventoryService:
                    def reserve(self, item_id: str) -> None:
                        print(f"Reserving item {item_id}")

                class NotificationService:
                    def send_confirmation(self, user_id: str) -> None:
                        print(f"Sending confirmation to {user_id}")

                class CheckoutFacade:
                    def __init__(self) -> None:
                        self.auth = AuthService()
                        self.payment = PaymentService()
                        self.inventory = InventoryService()
                        self.notifications = NotificationService()

                    def place_order(self, user_id: str, item_id: str, amount: float) -> None:
                        if not self.auth.authenticate(user_id):
                            raise ValueError("Authentication failed")

                        self.inventory.reserve(item_id)
                        self.payment.charge(user_id, amount)
                        self.notifications.send_confirmation(user_id)

                checkout = CheckoutFacade()
                checkout.place_order("user-42", "book-7", 39.99)`,
            explanation:
                "The checkout facade gives callers one entrypoint while internally coordinating the subsystem calls needed to complete the order.",
        },
      ],
    },
    {
        slug: "video-conversion-pipeline",
        title: "Video conversion pipeline",
        summary:
            "A video conversion facade wraps several media-processing steps behind a single convert method.",
        languageExamples: [
            {
                language: "TypeScript",
                code: 
                    `class VideoReader {
                        read(fileName: string): void {
                            console.log(\`Reading \${fileName}\`);
                        }
                    }

                    class VideoDecoder {
                        decode(): void {
                            console.log("Decoding video stream");
                        }
                    }

                    class VideoEncoder {
                        encode(format: string): void {
                            console.log(\`Encoding to \${format}\`);
                        }
                    }

                    class VideoWriter {
                        write(outputFile: string): void {
                            console.log(\`Writing output to \${outputFile}\`);
                        }
                    }

                    class VideoConversionFacade {
                        constructor(
                            private reader = new VideoReader(),
                            private decoder = new VideoDecoder(),
                            private encoder = new VideoEncoder(),
                            private writer = new VideoWriter(),
                        ) {}

                        convert(inputFile: string, outputFile: string, format: string): void {
                            this.reader.read(inputFile);
                            this.decoder.decode();
                            this.encoder.encode(format);
                            this.writer.write(outputFile);
                        }
                    }

                    const converter = new VideoConversionFacade();
                    converter.convert("demo.mov", "demo.mp4", "mp4");`,
                explanation:
                    "The facade wraps the multi-step conversion pipeline so the client only sees one simple conversion API.",
            },
            {
                language: "Java",
                code: 
                    `class VideoReader {
                        public void read(String fileName) {
                            System.out.println("Reading " + fileName);
                        }
                    }

                    class VideoDecoder {
                        public void decode() {
                            System.out.println("Decoding video stream");
                        }
                    }

                    class VideoEncoder {
                        public void encode(String format) {
                            System.out.println("Encoding to " + format);
                        }
                    }

                    class VideoWriter {
                        public void write(String outputFile) {
                            System.out.println("Writing output to " + outputFile);
                        }
                    }

                    class VideoConversionFacade {
                        private final VideoReader reader = new VideoReader();
                        private final VideoDecoder decoder = new VideoDecoder();
                        private final VideoEncoder encoder = new VideoEncoder();
                        private final VideoWriter writer = new VideoWriter();

                        public void convert(String inputFile, String outputFile, String format) {
                            reader.read(inputFile);
                            decoder.decode();
                            encoder.encode(format);
                            writer.write(outputFile);
                        }
                    }

                    VideoConversionFacade converter = new VideoConversionFacade();
                    converter.convert("demo.mov", "demo.mp4", "mp4");`,
                explanation:
                    "The facade shields the client from the underlying video subsystem and exposes a smaller, task-oriented interface.",
            },
            {
                language: "Python",
                code: 
                    `class VideoReader:
                        def read(self, file_name: str) -> None:
                            print(f"Reading {file_name}")

                    class VideoDecoder:
                        def decode(self) -> None:
                            print("Decoding video stream")

                    class VideoEncoder:
                        def encode(self, format: str) -> None:
                            print(f"Encoding to {format}")

                    class VideoWriter:
                        def write(self, output_file: str) -> None:
                            print(f"Writing output to {output_file}")

                    class VideoConversionFacade:
                        def __init__(self) -> None:
                            self.reader = VideoReader()
                            self.decoder = VideoDecoder()
                            self.encoder = VideoEncoder()
                            self.writer = VideoWriter()

                        def convert(self, input_file: str, output_file: str, format: str) -> None:
                            self.reader.read(input_file)
                            self.decoder.decode()
                            self.encoder.encode(format)
                            self.writer.write(output_file)

                    converter = VideoConversionFacade()
                    converter.convert("demo.mov", "demo.mp4", "mp4")`,
                explanation:
                    "The facade provides a single conversion call while keeping the pipeline steps inside the subsystem boundary.",
            },
        ],
    },
    {
        slug: "home-theater-startup",
        title: "Home theater startup",
        summary:
            "A home theater facade simplifies a multi-device startup sequence into one watchMovie operation.",
    
        languageExamples: [
            {
                language: "TypeScript",
                code: 
                    `class Lights {
                        dim(): void {
                            console.log("Dimming lights");
                        }
                    }
                        
                    class Projector {
                        on(): void {
                            console.log("Turning on projector");
                        }

                        setInput(source: string): void {
                            console.log(\`Projector input set to \${source}\`);
                        }
                    }

                    class SoundSystem {
                        on(): void {
                            console.log("Turning on sound system");
                        }

                        setVolume(level: number): void {
                            console.log(\`Setting volume to \${level}\`);
                        }
                    }

                    class StreamingPlayer {
                        on(): void {
                            console.log("Turning on streaming player");
                        }

                        play(movie: string): void {
                            console.log(\`Playing \${movie}\`);
                        }
                    }

                    class HomeTheaterFacade {
                        constructor(
                            private lights = new Lights(),
                            private projector = new Projector(),
                            private sound = new SoundSystem(),
                            private player = new StreamingPlayer(),
                        ) {}

                        watchMovie(movie: string): void {
                            this.lights.dim();
                            this.projector.on();
                            this.projector.setInput("HDMI 1");
                            this.sound.on();
                            this.sound.setVolume(10);
                            this.player.on();
                            this.player.play(movie);
                        }
                    }
                    const theater = new HomeTheaterFacade();
                    theater.watchMovie("Inception");`,
                explanation:
                    "The facade turns a sequence of device operations into one high-level action that is easier for the client to use.",
            },
            {
                language: "Java",
                code: 
                    `class Lights {
                        public void dim() {
                            System.out.println("Dimming lights");
                        }
                    }

                    class Projector {
                        public void on() {
                            System.out.println("Turning on projector");
                        }

                        public void setInput(String source) {
                            System.out.println("Projector input set to " + source);
                        }
                    }

                    class SoundSystem {
                        public void on() {
                            System.out.println("Turning on sound system");
                        }

                        public void setVolume(int level) {
                            System.out.println("Setting volume to " + level);
                        }
                    }

                    class StreamingPlayer {
                        public void on() {
                            System.out.println("Turning on streaming player");
                        }

                        public void play(String movie) {
                            System.out.println("Playing " + movie);
                        }
                    }

                    class HomeTheaterFacade {
                        private final Lights lights = new Lights();
                        private final Projector projector = new Projector();
                        private final SoundSystem sound = new SoundSystem();
                        private final StreamingPlayer player = new StreamingPlayer();

                        public void watchMovie(String movie) {
                            lights.dim();
                            projector.on();
                            projector.setInput("HDMI 1");
                            sound.on();
                            sound.setVolume(10);
                            player.on();
                            player.play(movie);
                        }
                    }

                    HomeTheaterFacade theater = new HomeTheaterFacade();
                    theater.watchMovie("Inception");`,
                explanation:
                    "The client avoids manual device coordination because the facade wraps the ordered startup behavior behind one method.",
            },
            {
                language: "Python",
                code: 
                    `class Lights:
                        def dim(self):
                            print("Dimming lights")

                    class Projector:
                        def __init__(self):
                            self.input_source = None

                        def on(self):
                            print("Turning on projector")

                        def set_input(self, source):
                            self.input_source = source
                            print(f"Projector input set to {self.input_source}")

                    class SoundSystem:
                        def __init__(self):
                            self.volume = 0

                        def on(self):
                            print("Turning on sound system")

                        def set_volume(self, level):
                            self.volume = level
                            print(f"Setting volume to {self.volume}")

                    class StreamingPlayer:
                        def __init__(self):
                            self.movie = None

                        def on(self):
                            print("Turning on streaming player")

                        def play(self, movie):
                            self.movie = movie
                            print(f"Playing {self.movie}")

                    class HomeTheaterFacade:
                        def __init__(self):
                            self.lights = Lights()
                            self.projector = Projector()
                            self.sound = SoundSystem()
                            self.player = StreamingPlayer()

                        def watch_movie(self, movie):
                            self.lights.dim()
                            self.projector.on()
                            self.projector.set_input("HDMI 1")
                            self.sound.on()
                            self.sound.set_volume(10)
                            self.player.on()
                            self.player.play(movie)

                    theater = HomeTheaterFacade()
                    theater.watch_movie("Inception")`,
                explanation:
                    "The client avoids manual device coordination because the facade wraps the ordered startup behavior behind one method.",
            }
        ],
    }
  ],
  realWorldExamples: [
    {
      title: "Checkout orchestration",
      description:
        "Expose a single order placement API while coordinating identity, inventory, payment, and customer messaging services.",
    },
    {
      title: "Media processing services",
      description:
        "Wrap decoding, transcoding, packaging, and storage steps behind one simpler conversion interface.",
    },
    {
      title: "Application startup flows",
      description:
        "Hide multi-step subsystem initialization behind a single boot or setup method.",
    },
  ],
};

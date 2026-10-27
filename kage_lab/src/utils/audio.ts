export class SoundManager {
  private static instance: SoundManager;
  private audioCache: Map<string, HTMLAudioElement> = new Map();

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  public play(soundPath: string, volume = 0.5): void {
    try {
      let audio = this.audioCache.get(soundPath);
      if (!audio) {
        audio = new Audio(soundPath);
        this.audioCache.set(soundPath, audio);
      }
      audio.volume = Math.max(0, Math.min(1, volume));
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Silently catch autoplay restrictions
      });
    } catch {
      // Audio unsupported or blocked
    }
  }
}

export const soundManager = SoundManager.getInstance();

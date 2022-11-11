interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEventos(): void {
    //
  }

  playToggle(): void {
    //
  }

  stop(): void {
    //
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});
videoPlayer.iniciarEventos();

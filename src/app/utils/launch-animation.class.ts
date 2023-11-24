import { AppLaunchView } from "@nativescript/angular";
import { GridLayout, Image } from "@nativescript/core";

export class LaunchAnimation extends GridLayout implements AppLaunchView {
  circle: GridLayout;
  image: Image;
  finished = false;
  complete: (value?: unknown) => void;

  constructor() {
    super();
    this.backgroundColor = "#183486";
    this.className = "w-full h-full";
    // construct any creative animation
    this.circle = new GridLayout();
    this.image = new Image();

    this.circle.width = 120;
    this.circle.height = 120;
    this.circle.borderRadius = 120 / 2;
    this.circle.horizontalAlignment = "right";
    this.circle.verticalAlignment = "bottom";
    this.circle.backgroundColor = "#fff";
    this.image.src = "~/app/assets/logo.png";
    this.image.width = 200;
    this.image.height = 200;
    this.addChild(this.circle);
  }

  async startAnimation() {
    await this.circle.animate({
      scale: { x: 12, y: 12 },
      duration: 100,
    });

    await this.circle.animate({
      scale: { x: 6, y: 6 },
      duration: 100,
    });

    await this.circle.animate({
      scale: { x: 3, y: 3 },
      duration: 100,
    });

    await this.circle.animate({
      scale: { x: 12, y: 12 },
      duration: 1000,
    });

    await this.circle.animate({
      scale: { x: 16, y: 16 },
      duration: 100,
    });

    if (this.finished) {
      await this.circle.animate({
        scale: { x: 32, y: 32 },
        duration: 400,
      });
      this.circle.horizontalAlignment = "center";
      this.circle.verticalAlignment = "middle";
      this.circle.addChild(this.image);
      this.circle.backgroundColor = this.backgroundColor;
      await this.circle.animate({
        scale: { x: 3, y: 3 },
        duration: 300,
      });
      this.fadeOut();
    } else {
      // keep looping
      this.startAnimation();
    }
  }

  cleanup() {
    return new Promise((resolve) => {
      this.complete = resolve;
      this.finished = true;
    });
  }

  async fadeOut() {
    await this.animate({
      opacity: 0,
      duration: 400,
    });
    this.complete();
  }
}

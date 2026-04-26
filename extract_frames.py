#!/usr/bin/env python3
import cv2
import os
from pathlib import Path

# Video paths
video_base = r"C:\Users\Admin\OneDrive\Documents\Claude projects\benny website\videos\videos to use"
output_base = r"C:\Users\Admin\OneDrive\Documents\Claude projects\benny website\videos\frames"

videos = {
    "manual": "manual exp.mp4",
    "electric": "electric exp.mp4",
    "corner": "corner exp.mp4"
}

for product, video_name in videos.items():
    video_path = os.path.join(video_base, video_name)
    output_dir = os.path.join(output_base, product)

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Open video
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    print(f"\n{product.upper()} - {video_name}")
    print(f"  FPS: {fps}, Total frames: {frame_count}")

    # Extract every 2nd frame (for smooth ~12fps effect)
    frame_num = 0
    extracted = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_num % 2 == 0:  # Extract every 2nd frame
            height = frame.shape[0]
            width = frame.shape[1]

            # Resize to 1280x720 if needed
            if (width, height) != (1280, 720):
                frame = cv2.resize(frame, (1280, 720))

            output_path = os.path.join(output_dir, f"{extracted+1:03d}.jpg")
            cv2.imwrite(output_path, frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
            extracted += 1

            if extracted % 20 == 0:
                print(f"  Extracted {extracted} frames...")

        frame_num += 1

    cap.release()
    print(f"  [OK] Complete: {extracted} frames saved to {output_dir}")

print("\n[OK] All frames extracted successfully!")

from PIL import Image
import os

# Ensure directory exists
os.makedirs("public/images/chapters", exist_ok=True)

images = {
    "ch1-baby-cupid.webp": (173, 216, 230), # Light blue
    "ch2-childhood.webp": (255, 255, 224), # Light yellow
    "ch3-yamuna-enters.webp": (135, 206, 235), # Sky blue
    "ch4-classroom-moment.webp": (135, 206, 235),
    "ch5-friendship.webp": (135, 206, 235),
    "ch6-heart-unlock.webp": (255, 0, 0), # Red
    "ch7-revelation.webp": (100, 149, 237), # Cornflower blue (Dusty blue-ish)
    "ch8-tears.webp": (100, 149, 237),
    "ch9-autograph.jpg": (230, 230, 250), # Lavender
    "ch10-cars-bikes.webp": (54, 69, 79), # Charcoal
    "ch11-whatsapp.webp": (255, 127, 80), # Coral
    "ch12-instagram.webp": (255, 127, 80),
    "ch13-transformation.webp": (255, 0, 0),
    "ch14-proposal.webp": (255, 0, 0),
}

for name, color in images.items():
    img = Image.new('RGB', (1200, 800), color)
    path = os.path.join("public/images/chapters", name)
    # allow saving webp if library supports, else fallback or just save as png and rename?
    # PIL supports webp usually.
    try:
        img.save(path)
        print(f"Created {path}")
    except Exception as e:
        print(f"Error creating {path}: {e}")

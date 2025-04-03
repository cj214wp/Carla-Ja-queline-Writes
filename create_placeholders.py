from PIL import Image, ImageDraw
import os

def create_placeholder(width, height, color, filename):
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    draw.text((width//2, height//2), "Placeholder", fill="white", anchor="mm")
    img.save(f"images/{filename}")

# Create images directory if it doesn't exist
os.makedirs("images", exist_ok=True)

# Generate placeholder images
create_placeholder(800, 600, "#1a1a1a", "hero-bg.jpg")
create_placeholder(400, 400, "#1a1a1a", "placeholder-profile.jpg")
create_placeholder(400, 300, "#1a1a1a", "placeholder-1.jpg")
create_placeholder(400, 300, "#1a1a1a", "placeholder-2.jpg")
create_placeholder(400, 300, "#1a1a1a", "placeholder-3.jpg") 
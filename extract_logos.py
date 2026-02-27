import re
import base64
import os

target_dir = "/Users/antoniomonteiro/Desktop/C2C Landing Page/assets/logos"
js_file = "/Users/antoniomonteiro/Desktop/C2C Landing Page/clientLogos.js"

with open(js_file, "r") as f:
    content = f.read()

# More robust pattern to extract base64 data
matches = re.finditer(r'\{n:\s*"([^"]+)",\s*d:\s*"data:image/([^;]+);base64,([^"]+)"\}', content)

count = 0
for match in matches:
    name = match.group(1).replace(" ", "_").lower()
    ext = match.group(2)
    b64_data = match.group(3)
    
    file_path = os.path.join(target_dir, f"{name}_{count}.{ext}")
    count += 1
    try:
        with open(file_path, "wb") as img_file:
            img_file.write(base64.b64decode(b64_data))
        print(f"Extracted {file_path}")
    except Exception as e:
        print(f"Error extracting {name}: {e}")

print(f"Total extracted: {count}")

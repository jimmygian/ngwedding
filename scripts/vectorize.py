import vtracer

images = [
    r"C:\Users\Nikos\Documents\Projects\wedding\ngwedding\assets\pics\greek text\1\Screenshot 2026-08-09 164902.png",
    r"C:\Users\Nikos\Documents\Projects\wedding\ngwedding\assets\pics\greek text\1\προγραμμα.png"
]

for img in images:
    out = img.replace(".png", ".svg")
    vtracer.convert_image_to_svg_py(img, out, colormode="binary", filter_speckle=4)
    print(f"Converted {img} to {out}")

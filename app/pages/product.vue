<script setup lang="ts">
  const result = ref(null)
  const error = ref(null)

  async function getProductIntro() {
    try {
      result.value = await $fetch("/api/product", {
        method: "POST",
        body: {
          content: "Razer Blade 16 Gaming Laptop: NVIDIA GeForce RTX 4090-13th Gen Intel 24-Core i9 HX CPU - 16\" Dual Mode Mini LED (4K UHD+ 120Hz & FHD+ 240Hz) - 32GB RAM - 2TB SSD - Compact GaN Charger - Windows 11 NVIDIA GEFORCE RTX 4090 GRAPHICS: Packed for pure performance with 1.50 gPD (Graphics Power Density) and delivers up to 35% more graphic power per inch than any other 16 inch gaming laptop     \n13TH GEN INTEL CORE I9 13950HX PROCESSOR: From full-blown AAA gaming to full-on content creation, run resource-intensive tasks flawlessly with the most powerful mobile processor leveraging desktop-grade silicon\n NEXT GEN DUAL-MODE MINI LED DISPLAY: Switch between ultra-sharp 4K for creative work and ultra-fast refresh rates for silky-smooth gameplay, backed by 1K nits peak brightness and 100% DCI-P3 color accuracy \n 16 INCH DISPLAY IN A 15 INCH BODY: Built with similar chassis dimensions to a typical 15” gaming laptop, it's just as ultra-portable yet offers even more screen real estate—a solution that’s the best of both worlds \nULTRA-COMPACT GAN CHARGER (UP TO 330W): Stay ready to go with a charger that’s not only faster and more power-efficient than standard adapters but also up to 60% smaller \nANODIZED ALUMINUM UNIBODY: CNC-milled from a single aluminum block, the chassis achieves optimal strength-to-weight ratio and is anodized with a matte black finish for a smooth, scratch-resistant surface",
          language: "English"
        }
      })
    } catch (err) {
      error.value = err
    }
  }
</script>

<template>
  <div>
    <button @click="getProductIntro">Fetch Product Intro</button>
    <pre v-if="result">{{ result }}</pre>
    <pre v-if="error">{{ error }}</pre>
  </div>
</template>

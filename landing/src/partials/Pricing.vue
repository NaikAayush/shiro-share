<template>
  <section class="relative">

    <!-- Illustration -->
    <div class="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/pricing-illustration.svg" class="max-w-none" width="618" height="468" alt="Pricing Illustration">
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-uncut-sans mb-4">Find a plan that's right for you</h2>
          <div class="max-w-2xl mx-auto">
            <p class="text-xl text-gray-400">Start for free. Pay only if you need more storage or files to be kept for longer.</p>
          </div>
        </div>

        <!-- Pricing tables -->
        <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

          <!-- Pricing table 1 -->
          <div class="relative flex flex-col h-full p-6" data-aos="zoom-out">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Free Fier</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">0</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">Instant file sharing for personal use.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="https://share.shiro.network" target="_blank">
                Start with Free Tier <span class="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div class="font-medium mb-4">Features include:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited number of files.</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Max. 100MB per file.</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Files are only stored for 24 hours.</span>
              </li>
            </ul>
          </div>

          <!-- Pricing table 2 -->
          <div class="relative flex flex-col h-full p-6 bg-gray-800" data-aos="zoom-out" data-aos-delay="100">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Standard</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">19</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">Larger files and longer term storage.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-gray-600 to-gray-400 hover:cursor-not-allowed w-full shadow-lg group" href="#0">
                Coming Soon
              </a>
            </div>
            <div class="font-medium mb-4">Everything in Free Tier, plus:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Max. 1GB per file.</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Files are kept for 7 days.</span>
              </li>
            </ul>
          </div>

          <!-- Pricing table 3 -->
          <div class="relative flex flex-col h-full p-6" data-aos="zoom-out" data-aos-delay="200">
            <div class="mb-6">
              <div class="text-lg font-semibold mb-1">Professional</div>
              <div class="font-uncut-sans inline-flex items-baseline mb-2">
                <span class="text-3xl font-medium text-gray-400">$</span>
                <span class="text-4xl font-bold leading-7">49</span>
                <span class="font-medium text-gray-400">/mo</span>
              </div>
              <div class="text-gray-400 mb-6">For power users.</div>
              <a class="btn-sm text-white bg-gradient-to-t from-gray-600 to-gray-400 hover:cursor-not-allowed w-full shadow-lg group" href="#0">
                Coming Soon
              </a>
            </div>
            <div class="font-medium mb-4">Everything in Standard, plus:</div>
            <ul class="text-gray-400 space-y-3 grow">
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited file size.</span>
              </li>
              <li class="flex items-center">
                <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Files kept for as long as subscription exists.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Pricing',
}
</script>

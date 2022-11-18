<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-uncut-sans">
            Resources to help you get the most out of Shiro
          </h2>
        </div>

        <!-- Content -->
        <div>
          <!-- Category buttons -->
          <div class="mb-16">
            <div class="flex flex-wrap justify-center -m-2.5">
              <div :class="{ 'rotate-2': category === '1' }">
                <button
                  class="relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:rounded-full"
                  :class="
                    category === '1'
                      ? 'shadow-lg shadow-blue-500/25 before:via-gray-300'
                      : 'before:via-gray-600'
                  "
                  @click="category = '1'"
                >
                  <div class="flex items-center justify-center">
                    <svg
                      class="w-3 h-3 shrink-0 fill-gray-400 mr-2"
                      :class="{ 'fill-white': category === '1' }"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.999 9.012a.999.999 0 0 1-.706-1.707l3.496-3.5a.998.998 0 0 1 1.413 0l2.29 2.293 2.79-2.793a.998.998 0 1 1 1.413 1.414l-3.496 3.5a.998.998 0 0 1-1.413 0l-2.29-2.293-2.79 2.793a.998.998 0 0 1-.707.293Z"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <span
                      class="transition duration-150 ease-in-out"
                      :class="
                        category === '1'
                          ? 'text-blue-500'
                          : 'text-gray-400 group-hover:text-gray-300'
                      "
                      >For Developers</span
                    >
                  </div>
                </button>
              </div>

              <div :class="{ 'rotate-2': category === '4' }">
                <button
                  class="relative font-medium px-3 py-1.5 bg-gray-800 rounded-full inline-flex m-2.5 group before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full"
                  :class="
                    category === '4'
                      ? 'shadow-lg shadow-blue-500/25 before:via-gray-300'
                      : 'before:via-gray-600'
                  "
                  @click="category = '4'"
                >
                  <div class="flex items-center justify-center">
                    <svg
                      class="w-3 h-3 shrink-0 fill-gray-400 mr-2"
                      :class="{ 'fill-white': category === '4' }"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                        fill-rule="nonzero"
                      />
                    </svg>
                    <span
                      class="transition duration-150 ease-in-out"
                      :class="
                        category === '4'
                          ? 'text-blue-500'
                          : 'text-gray-400 group-hover:text-gray-300'
                      "
                      >For Everyone else</span
                    >
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Boxes -->
          <div
            class="max-w-sm mx-auto sm:max-w-none grid gap-12 grid-cols-2 sm:gap-x-6 sm:gap-y-8 items-start"
          >

            <!-- 4th Box -->
            <a
              class="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ml-36 flex flex-col items-center"
              href="https://github.com/NaikAayush/shiro-storage/"
              v-show="['1'].includes(category)"
            >
              <div
                class="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full"
              >
                <svg
                  class="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <div class="font-uncut-sans text-xl text-gray-100 font-semibold">
                Shiro Storage GitHub
              </div>
            </a>

            <a
              class="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group ml-36 flex flex-col items-center"
              href="https://github.com/NaikAayush/shiro-share"
              v-show="['4'].includes(category)"
            >
              <div
                class="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full"
              >
                <svg
                  class="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0Z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <div class="font-uncut-sans text-xl text-gray-100 font-semibold">
                Shiro Share GitHub
              </div>
            </a>

            <!-- 5th Box -->
            <a
              class="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group mr-36 flex flex-col items-center"
              href="https://docs.storage.shiro.network/"
              v-show="['1'].includes(category)"
            >
              <div
                class="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full"
              >
                <svg
                  class="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                  width="23"
                  height="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                    fill-rule="nonzero"
                    fill-opacity=".64"
                  />
                  <rect width="14" height="17" rx="1" />
                </svg>
              </div>
              <div class="font-uncut-sans text-xl text-gray-100 font-semibold">
                Shiro Storage Docs
              </div>
            </a>

            <!-- 5th Box -->
            <a
              class="block relative before:content-[''] before:bg-gray-800 before:absolute before:-z-10 before:inset-0 p-6 group mr-36 flex flex-col items-center"
              href="https://docs.share.shiro.network/"
              v-show="['4'].includes(category)"
            >
              <div
                class="relative h-12 w-12 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 flex items-center justify-center shadow-lg mb-3 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full"
              >
                <svg
                  class="fill-blue-500 group-hover:fill-gray-200 transition duration-150 ease-in-out"
                  width="23"
                  height="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.924 19h6.927l5.128 1.386 3.399-12.548L16 6.654V4.582l5.859 1.586a1 1 0 0 1 .704 1.226l-3.913 14.48a1 1 0 0 1-1.226.705l-12.55-3.393.05-.186Z"
                    fill-rule="nonzero"
                    fill-opacity=".64"
                  />
                  <rect width="14" height="17" rx="1" />
                </svg>
              </div>
              <div class="font-uncut-sans text-xl text-gray-100 font-semibold">
                Shiro Share Docs
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Resources",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>

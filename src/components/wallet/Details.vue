<template>
  <section class="mb-5">
    <!-- Desktop -->
    <div class="py-8 bg-theme-feature-background hidden md:flex xl:rounded-lg items-center">
      <button
        @click="showModal = true"
        class="address-button ml-10 mr-6 p-3 rounded flex-none hover-button-shadow">
        <img class="block" src="@/assets/images/icons/qr.svg" />
      </button>

      <div
        v-if="view === 'public'"
        class="pr-8 flex-auto min-w-0">
        <div class="text-grey mb-2">Address</div>
        <div class="text-lg text-white semibold truncate">
          <span class="mr-2">{{ wallet.address }}</span>
          <clipboard v-if="wallet.address" :value="wallet.address"></clipboard>
        </div>
      </div>

      <div
        v-if="view === 'private' && wallet.publicKey"
        class="pr-8 flex-auto min-w-0">
        <div class="text-grey mb-2">Public Key</div>
        <div class="text-lg text-white semibold truncate mr-2">
          <span class="mr-2">{{ wallet.publicKey }}</span>
          <clipboard v-if="wallet.publicKey" :value="wallet.publicKey"></clipboard>
        </div>
      </div>

      <div class="flex-none px-8">
        <button
          @click="view = 'public'"
          :class="[view === 'public' ? 'bg-blue-darker' : 'bg-transparent text-blue-light', 'py-3 px-3 rounded-md text-white font-normal text-xs hover:text-blue']">
          <svg
            class="block"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="17px" height="17px">
            <path fill-rule="evenodd"  fill="currentColor" d="M8.499,0.500 C4.099,0.500 0.500,4.100 0.500,8.499 C0.500,12.900 4.099,16.500 8.499,16.500 C12.900,16.500 16.499,12.900 16.499,8.499 C16.499,4.100 12.900,0.500 8.499,0.500 ZM13.700,5.800 C14.099,5.800 14.399,6.100 14.799,6.100 C14.500,6.500 13.200,6.500 12.800,6.000 C13.099,5.900 13.299,5.800 13.700,5.800 ZM1.500,8.499 C1.500,8.100 1.500,7.700 1.600,7.200 C1.700,7.200 1.799,7.299 1.899,7.299 C1.899,7.299 1.999,7.400 1.999,7.500 C1.999,7.799 2.299,8.000 2.500,8.000 C3.300,8.100 3.600,8.799 4.300,9.000 C4.500,9.099 4.400,9.299 4.300,9.500 C3.700,10.300 4.200,10.900 4.700,11.400 C5.200,11.799 5.200,12.200 5.300,12.799 C5.300,13.500 5.400,14.300 5.699,15.000 C3.199,13.800 1.500,11.400 1.500,8.499 ZM8.499,15.500 C7.799,15.500 6.999,15.400 6.399,15.200 C6.299,15.000 6.299,14.799 6.399,14.599 C6.799,13.800 7.200,13.099 7.699,12.400 C7.899,12.200 8.100,12.000 8.100,11.700 C8.100,11.500 8.200,11.200 8.299,11.000 C8.599,10.500 8.499,10.200 8.100,10.099 C7.299,9.900 6.899,9.200 6.299,8.899 C5.699,8.600 5.099,8.400 4.600,8.700 C4.400,8.799 4.099,8.899 4.099,8.600 C4.099,8.200 3.600,7.900 3.700,7.500 C3.600,7.500 3.500,7.500 3.400,7.600 C3.300,7.700 3.199,7.799 2.999,7.700 C2.799,7.500 2.899,7.299 2.899,7.100 C2.999,6.900 3.099,6.800 3.300,6.700 C3.700,6.600 4.099,6.600 4.300,7.100 C4.600,6.200 5.200,5.700 5.799,5.299 C5.799,5.299 6.599,4.600 6.699,4.600 C6.799,4.600 6.899,4.799 7.100,4.900 C7.299,4.900 7.399,4.900 7.399,4.700 C7.499,4.200 7.200,3.600 6.799,3.500 C6.799,3.400 6.899,3.400 6.899,3.400 C7.200,3.299 7.599,3.100 7.499,2.799 C7.499,2.400 7.100,2.200 6.699,2.200 C6.499,2.200 6.299,2.200 6.100,2.299 C5.699,2.500 5.200,2.700 4.600,2.700 C5.699,1.899 7.100,1.500 8.499,1.500 C8.799,1.500 9.000,1.500 9.299,1.500 C8.699,1.600 8.100,1.799 7.699,2.000 C8.299,2.100 8.399,2.400 8.200,2.900 C8.100,3.100 8.200,3.299 8.399,3.400 C8.599,3.500 8.799,3.500 8.899,3.299 C9.099,3.000 9.499,2.900 9.799,2.799 C10.200,2.700 10.499,2.500 10.799,2.100 C10.799,2.000 10.900,2.000 11.000,1.899 C11.599,2.100 12.200,2.500 12.800,2.900 C12.700,2.900 12.700,3.000 12.599,3.000 C12.400,3.200 12.099,3.299 12.400,3.700 C12.499,3.900 12.400,4.000 12.299,4.100 C12.099,4.200 12.000,4.100 11.900,4.000 C11.799,3.900 11.799,3.700 11.499,3.700 C11.400,3.900 11.099,4.000 11.099,4.300 C11.599,4.300 11.499,4.700 11.599,5.000 C11.000,5.100 10.799,5.400 11.099,5.900 C11.200,6.100 11.000,6.200 10.900,6.300 C10.499,6.900 10.099,7.299 10.099,8.000 C10.099,8.700 10.599,9.400 11.400,9.299 C12.299,9.200 12.299,9.200 12.599,10.000 C12.599,10.099 12.700,10.200 12.700,10.300 C12.800,10.500 12.900,10.700 12.800,10.900 C12.499,11.700 12.900,12.299 13.200,12.900 C13.299,13.099 13.399,13.200 13.499,13.299 C12.200,14.700 10.499,15.500 8.499,15.500 Z"/>
          </svg>
        </button>
        <button
          v-if="wallet.publicKey"
          @click="view = 'private'"
          :class="[view === 'private' ? 'bg-blue-darker' : 'bg-transparent text-blue-light', 'py-3 px-3 rounded-md text-white font-normal text-xs hover:text-blue']">
          <svg
            class="block"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="13px" height="14px">
            <path fill-rule="evenodd"  fill="currentColor" d="M5.833,10.537 L4.850,9.544 L8.229,6.124 C9.457,6.794 11.013,6.618 12.051,5.570 C13.315,4.289 13.315,2.213 12.051,0.934 C10.786,-0.346 8.734,-0.346 7.469,0.934 C6.432,1.982 6.260,3.559 6.921,4.800 L0.269,11.532 C-0.091,11.896 -0.091,12.493 0.269,12.857 C0.629,13.221 1.218,13.221 1.578,12.857 L2.559,13.850 C2.740,14.033 3.034,14.033 3.214,13.850 L3.869,13.188 C4.050,13.005 4.050,12.709 3.869,12.526 L2.887,11.532 L3.542,10.868 L4.524,11.863 C4.704,12.046 4.997,12.046 5.178,11.863 L5.833,11.201 C6.013,11.016 6.013,10.722 5.833,10.537 ZM8.777,2.259 C9.320,1.710 10.200,1.710 10.742,2.259 C11.283,2.806 11.283,3.698 10.742,4.245 C10.200,4.793 9.320,4.793 8.777,4.245 C8.237,3.698 8.237,2.806 8.777,2.259 Z"/>
          </svg>
        </button>
      </div>

      <div
        v-if="view === 'public'"
        class="flex-none border-l border-grey-dark px-9">
        <div class="text-grey mb-2">Balance ARK</div>
        <div class="text-lg text-white semibold">{{ readableCrypto(wallet.balance, false) }}</div>
      </div>

      <div
        v-if="view === 'public'"
        class="flex-none border-l border-grey-dark px-9">
        <div class="text-grey mb-2">Transactions</div>
        <div class="text-lg text-white semibold">
          <span class="text-green">{{ receivedCount }}</span>
          <img class="mr-4" src="@/assets/images/icons/arrow-down.svg" />
          <span class="text-red">{{ sendCount }}</span>
          <img src="@/assets/images/icons/arrow-up.svg" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="px-5 sm:px-10 py-10 bg-theme-feature-background md:hidden" v-if="wallet.address">
      <div class="flex justify-center mb-10">
        <div class="p-2 bg-white rounded mx-auto">
          <qr-code :value="wallet.address" :options="{ size: 160 }"></qr-code>
        </div>
      </div>
      <div class="px-2">
        <div class="flex -mx-6 mb-8">
          <div class="md:w-1/2 px-6 w-full border-r border-grey-dark">
            <div class="text-grey mb-2">Address</div>
            <div class="text-white flex">
              <span class="mr-2">{{ truncate(wallet.address) }}</span>
              <clipboard v-if="wallet.address" :value="wallet.address"></clipboard>
            </div>
          </div>
          <div class="md:w-1/2 px-6 w-full" v-if="wallet.publicKey">
            <div class="text-grey mb-2">Public Key</div>
            <div class="text-white flex">
              <span class="mr-2">{{ truncate(wallet.publicKey, 36) }}</span>
              <clipboard v-if="wallet.publicKey" :value="wallet.publicKey"></clipboard>
            </div>
          </div>
        </div>
        <div class="flex -mx-6">
          <div class="w-1/2 px-6 w-full border-r border-grey-dark">
            <div class="text-grey mb-2">Balance (ARK)</div>
            <div class="text-white">{{ readableCrypto(wallet.balance, false) }}</div>
          </div>
          <div class="w-1/2 px-6 w-full">
            <div class="text-grey mb-2">Transactions</div>
            <div class="text-white">
              <span class="whitespace-no-wrap">
                <span class="text-green">{{ receivedCount }}</span>
                <img class="mr-4" src="@/assets/images/icons/arrow-down.svg" />
              </span>
              <span class="whitespace-no-wrap">
                <span class="text-red">{{ sendCount }}</span>
                <img src="@/assets/images/icons/arrow-up.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Modal v-if="showModal" @close="showModal = false">
      <div class="text-center p-10 pt-2">
        <p class="semibold text-3xl mb-4">QR Code</p>
        <p class="mb-10">Scan for Address</p>
        <qr-code :value="wallet.address" :options="{ size: 160 }"></qr-code>
      </div>
    </Modal>
  </section>
</template>

<script type="text/ecmascript-6">
import QrCode from '@/components/utils/QrCode'
import Clipboard from '@/components/utils/Clipboard'
import Modal from '@/components/Modal'
import Currency from '@/components/utils/Currency'

import TransactionService from '@/services/transaction'
import { mapGetters } from 'vuex'

export default {
  components: { Modal, Clipboard, QrCode, Currency },

  props: {
    wallet: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    sendCount: 0,
    receivedCount: 0,
    view: 'public',
    showModal: false,
  }),

  watch: {
    wallet(wallet) {
      if (!wallet.address) return

      this.getSendCount()
      this.getReceivedCount()
    },
  },

  methods: {
    getSendCount() {
      TransactionService.sendByAddressCount(this.wallet.address).then(
        response => (this.sendCount = response)
      )
    },

    getReceivedCount() {
      TransactionService.receivedByAddressCount(this.wallet.address).then(
        response => (this.receivedCount = response)
      )
    },
  },
}
</script>

<style scoped>
.address-button {
  background-color: #0964e4;
}

.address-button:hover {
  background-color: #0964e4;
  transform: scale(1.1);
}
</style>
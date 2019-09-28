<template>
  <div style="margin-top:20px;">
    <h1
      style="margin-left:15px;"
      class="mb-5 text-1xl md:text-3xl mb-5 md:mb-6 text-theme-text-primary sm:mr-5"
    >
      Staking
    </h1>
    <section class="page-section py-5 md:py-10">
      <table class="vgt-table bordered">
        <thead>
          <tr>
            <th class="vgt-left-align start-cell">
              Amount
            </th>
            <th class="vgt-right-align text-left hidden md:table-cell">
              Duration
            </th>
            <th class="vgt-right-align">
              Weight
            </th>
            <th class="vgt-right-align end-cell hidden xl:table-cell">
              Release
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(stake, createTime) in wallet.stake"
            :key="createTime"
          >
            <td class="vgt-left-align start-cell">
              {{ readableCrypto(stake.amount) }}
            </td>
            <td class="vgt-left-align break-all">
              {{ getExpiration(stake.duration) }}
            </td>
            <td
              class="vgt-right-align end-cell lg:base-cell"
            >
              {{ readableCrypto(stake.weight, false) + " VW" }}
            </td>
            <td
              class="vgt-right-align end-cell hidden xl:table-cell"
            >
              {{ readableTimestamp(stake.redeemableTimestamp) }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'WalletStakes',

  props: {
    wallet: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    view: 'public',
    showModal: false
  }),

  computed: {},

  methods: {
    setView (view) {
      this.view = view
    },

    getExpiration (seconds) {
      const monthSeconds = 2629800
      const monthCount = Math.floor(seconds / monthSeconds)
      if (monthCount > 0) {
        return monthCount + ' months'
      } else {
        return 'Less than 1 month'
      }
    }
  }
}
</script>

<style scoped>
.WalletHeaderDesktop {
  @apply .bg-theme-feature-background .items-center .py-8;
}

.address-button {
  background-color: #0964e4;
}

.address-button:hover {
  background-color: #0964e4;
  transform: scale(1.1);
}
</style>

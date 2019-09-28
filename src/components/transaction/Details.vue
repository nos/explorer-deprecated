<template>
  <section class="page-section py-5 md:py-10 mb-5">
    <div class="px-5 sm:px-10">
      <div class="list-row-border-b">
        <div class="mr-4">
          {{ $t('TRANSACTION.SENDER') }}
        </div>
        <div class="truncate">
          <LinkWallet
            :address="transaction.sender"
            :trunc="false"
            tooltip-placement="left"
          />
        </div>
      </div>

      <div
        v-if="transaction.recipient !== transaction.sender"
        class="list-row-border-b"
      >
        <div class="mr-4">
          {{ $t('TRANSACTION.RECIPIENT') }}
        </div>
        <div class="truncate">
          <LinkWallet
            :address="transaction.recipient"
            :type="transaction.type"
            :asset="transaction.asset"
            :trunc="false"
            tooltip-placement="left"
          />
        </div>
      </div>

      <div class="list-row-border-b">
        <div class="mr-4">
          {{ $t('TRANSACTION.TYPE') }}
        </div>
        <span v-if="transaction.type === 1">{{ $t('TRANSACTION.TYPES.SECOND_SIGNATURE') }}</span>
        <span v-else-if="transaction.type === 2">{{ $t('TRANSACTION.TYPES.DELEGATE_REGISTRATION') }}</span>
        <span v-else-if="transaction.type === 3">
          <RouterLink
            v-if="votedDelegateAddress"
            v-tooltip="{
              content: votedDelegateAddress,
              placement: tooltipPlacement
            }"
            :to="{ name: 'wallet', params: { address: votedDelegateAddress } }"
          >
            <span :class="getVoteColor">
              {{ isUnvote ? $t('TRANSACTION.TYPES.UNVOTE') : $t('TRANSACTION.TYPES.VOTE') }}
              <span
                class="italic"
              >({{ votedDelegateUsername }})</span>
            </span>
          </RouterLink>
        </span>
        <span v-else-if="transaction.type === 4">{{ $t('TRANSACTION.TYPES.MULTI_SIGNATURE') }}</span>
        <span v-else-if="transaction.type === 5">{{ $t('TRANSACTION.TYPES.IPFS') }}</span>
        <span v-else-if="transaction.type === 6">{{ $t('TRANSACTION.TYPES.TIMELOCK_TRANSFER') }}</span>
        <span v-else-if="transaction.type === 7">{{ $t('TRANSACTION.TYPES.MULTI_PAYMENT') }}</span>
        <span v-else-if="transaction.type === 8">{{ $t('TRANSACTION.TYPES.DELEGATE_RESIGNATION') }}</span>
        <span v-else-if="transaction.type === 100">Stake</span>
        <span v-else-if="transaction.type === 101">Stake Redeem</span>
      </div>

      <div
        v-if="transaction.amount > 0 || (transaction.asset !== undefined && transaction.asset.stakeCreate !== undefined)"
        class="list-row-border-b"
      >
        <div class="mr-4">
          {{ $t('TRANSACTION.AMOUNT') }}
        </div>
        <div
          v-if="transaction.amount > 0"
          v-tooltip="{
            trigger: 'hover click',
            content: price ? readableCurrency(transaction.amount, price) : '',
            placement: 'left'
          }"
        >
          {{ readableCrypto(transaction.amount) }}
        </div>
        <div
          v-if="transaction.asset !== undefined && transaction.asset.stakeCreate !== undefined"
          v-tooltip="{
            trigger: 'hover click',
            content: price ? readableCurrency(transaction.asset.stakeCreate.amount, price) : '',
            placement: 'left'
          }"
        >
          {{ readableCrypto(transaction.asset.stakeCreate.amount) }}
        </div>
      </div>

      <div class="list-row-border-b">
        <div class="mr-4">
          {{ $t('TRANSACTION.FEE') }}
        </div>
        <div
          v-tooltip="{
            trigger: 'hover click',
            content: price ? readableCurrency(transaction.fee, price) : '',
            placement: 'left'
          }"
        >
          {{ readableCrypto(transaction.fee) }}
        </div>
      </div>

      <div class="list-row-border-b-no-wrap">
        <div class="mr-4">
          {{ $t('COMMON.TIMESTAMP') }}
        </div>
        <div v-if="transaction.timestamp">
          {{ readableTimestamp(transaction.timestamp.unix) }}
        </div>
      </div>

      <div
        v-if="transaction.vendorField"
        class="list-row-border-b-no-wrap"
      >
        <div class="mr-4">
          {{ $t('TRANSACTION.SMARTBRIDGE') }}
        </div>
        <div class="overflow-hidden break-words">
          {{ emojify(transaction.vendorField) }}
        </div>
      </div>

      <div class="list-row">
        <div class="mr-4">
          {{ $t('TRANSACTION.BLOCK_ID') }}
        </div>
        <div>
          <LinkBlock
            v-if="transaction.blockId"
            :id="transaction.blockId"
          >
            {{ transaction.blockId }}
          </LinkBlock>
        </div>
      </div>

      <div class="list-row-border-b">
        <div class="mr-4">
          {{ $t('COMMON.CONFIRMATIONS') }}
        </div>
        <div>{{ confirmations }}</div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import CryptoCompareService from '@/services/crypto-compare'
import { mapGetters } from 'vuex'

export default {
  name: 'TransactionDetails',

  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    initialBlockHeight: 0,
    price: 0
  }),

  computed: {
    ...mapGetters('currency', { currencySymbol: 'symbol' }),
    ...mapGetters('network', ['height']),

    confirmations () {
      return this.initialBlockHeight
        ? this.height - this.initialBlockHeight
        : this.transaction.confirmations
    }
  },

  watch: {
    async transaction () {
      this.updatePrice()
      this.setInitialBlockHeight()
    },

    async currencySymbol () {
      await this.updatePrice()
    },

    height (newValue, oldValue) {
      if (!oldValue) {
        this.setInitialBlockHeight()
      }
    }
  },

  methods: {
    async updatePrice () {
      this.price = await CryptoCompareService.dailyAverage(
        this.transaction.timestamp.unix
      )
    },

    setInitialBlockHeight () {
      this.initialBlockHeight = this.height - this.transaction.confirmations
    }
  }
}
</script>

<style scoped>
.list-row-border-b-no-wrap > div:last-child {
  text-align: right;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

const currentPlan = ref('Premium')
const activeCurrency = ref('BDT')
const activeDuration = ref('Monthly')

const currencies = ['BDT', 'USD']
const durations = ['Monthly', 'Yearly']

const updateDuration = (duration: string) => {
  activeDuration.value = duration
}
const updateCurrency = (currency: string) => {
  activeCurrency.value = currency
}

const plans = [
  {
    name: 'Basic',
    price: 0,
    title: 'It’s Free, Try out skills-based hiring From Now.',
    features: [
      '5 Assessment Invitations Per Month',
      'Custom Test Configuration',
      'Change Plan for extra Candidates',
      'Realistic Simulation Tests',
      'Standard Test Library',
      'Validated Content',
      '24/7 Live Support'
    ]
  },
  {
    name: 'Premium',
    price: 100,
    title: 'Great for Medium teams looking to hire best talent, faster.',
    features: [
      '100 Assessment Invitations Per Year',
      '$1 for an extra Invitation',
      'Custom Test Configuration',
      'Change Plan for extra Candidates',
      'Realistic Simulation Tests',
      'Standard Test Library',
      'Validated Content',
      '24/7 Live Support',
      'Custom Content with Editor',
      'Customized Branding'
    ]
  },
  {
    name: 'Business',
    price: 450,
    title: 'Great for Medium teams looking to hire best talent, faster.',
    features: [
      '500 Assessment Invitations Per Year',
      '$1 for an extra Invitation',
      'Custom Test Configuration',
      'Change Plan for extra Candidates',
      'Realistic Simulation Tests',
      'Standard Test Library',
      'Validated Content',
      '24/7 Live Support',
      'Custom Content with Editor',
      'Customized Branding'
    ]
  }
]
</script>

<template>
  <div class="compare-plans">
    <div class="compare-plans__head">
      <h1 class="compare-plans__title text-lg">Compare plans</h1>
      <p class="compare-plans__desc text-xxs">
        We’ll credit your account if you need to downgrade during the billing cycle.
      </p>
    </div>

    <div class="compares">
      <div class="compares-tab">
        <button
          v-for="(currency, key) in currencies"
          :key="key"
          :class="activeCurrency === currency ? 'active' : ''"
          class="compares-tab__item"
          v-text="currency"
          @click="() => updateCurrency(currency)"
        />
      </div>

      <div class="compares-tab">
        <button
          v-for="(duration, key) in durations"
          :key="key"
          :class="activeDuration === duration ? 'active' : ''"
          class="compares-tab__item"
          v-text="duration"
          @click="() => updateDuration(duration)"
        />
      </div>
    </div>

    <div class="plans">
      <div
        v-for="(plan, key) in plans"
        class="plan"
        :class="currentPlan === plan.name ? 'active' : ''"
        :key="key"
      >
        <div class="plan__head">
          <h2 class="plan__title" v-text="plan.name" />
          <h2 class="plan__label">{{ plan.price }} USD /Month</h2>
        </div>
        <div class="plan__inner">
          <h5 class="plan__subtitle" v-text="plan.title" />
          <ul class="plan__features">
            <li
              class="plan__features-item"
              v-for="(feature, key) in plan.features"
              :key="key"
              v-text="feature"
            />
          </ul>
        </div>

        <button
          class="plan-button"
          :disabled="currentPlan === plan.name"
          v-if="plan.name !== 'Basic'"
        >
          {{ currentPlan === plan.name ? 'Current' : 'Upgrade' }}
        </button>
      </div>
    </div>
  </div>
</template>

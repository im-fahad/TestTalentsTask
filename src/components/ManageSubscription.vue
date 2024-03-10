<script setup lang="ts">
const features = [
  '5 Assessment Invitations Per Month',
  'Custom Test Configuration',
  'Change Plan for extra Candidates',
  'Realistic Simulation Tests',
  'Standard Test Library',
  'Validated Content',
  '24/7 Live Support'
]
</script>

<template>
  <div class="tt-tab__inner">
    <section class="tt-section">
      <div class="tt-section__head">
        <h1 class="tt-section__title text-sm">Current Plan</h1>
      </div>

      <div class="current-plan">
        <div class="current-plan__left">
          <div class="current-plan__info">
            <h2 class="current-plan__name text-lg">Basic</h2>
            <h3 class="current-plan__label text-xs">0 USD /Month</h3>
          </div>

          <div class="hr" />

          <ul class="plan-features">
            <li
              class="plan-features__item"
              v-for="(feature, key) in features"
              :key="key"
              v-text="feature"
            />
          </ul>
        </div>
        <div class="current-plan__right">
          <div class="current-plan__count text-lg">5</div>
          <h4 class="current-plan__title text-xs">Current Invitations Limit</h4>
          <h5 class="current-plan__desc text-xxs">Expired On : 6th September, 2024</h5>
        </div>
      </div>

      <button class="upgrade-button">Upgrade Plan</button>
    </section>

    <section class="tt-section">
      <div class="tt-section__head">
        <h1 class="tt-section__title text-sm">Recharge History</h1>
        <button class="download-all text-xxs">
          <span class="icon icon-Download" />
          Download All
        </button>
      </div>

      <table class="tt-table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Plan</th>
            <th>Payment Type</th>
            <th>Transaction ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>28th Nov, 2021</td>
            <td>2000 BDT</td>
            <td>Basic</td>
            <td>bKash</td>
            <td>1254789965653</td>
            <td>
              <span class="status status--success">
                <span class="icon-User-circle" />
                Approved</span
              >
            </td>
            <td>
              <span class="icon icon-Download" />
            </td>
          </tr>
          <tr>
            <td>28th Nov, 2021</td>
            <td>2000 BDT</td>
            <td>Basic</td>
            <td>bKash</td>
            <td>1254789965653</td>
            <td>
              <span class="status status--warning">
                <span class="icon-User-circle" />
                Pending</span
              >
            </td>
            <td>
              <span class="icon icon-Download" />
            </td>
          </tr>
          <tr>
            <td>28th Nov, 2021</td>
            <td>2000 BDT</td>
            <td>Basic</td>
            <td>bKash</td>
            <td>1254789965653</td>
            <td>
              <span class="status status--red">
                <span class="icon-User-circle" />
                Rejected</span
              >
            </td>
            <td>
              <span class="icon icon-Download" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

function renderSummary() {
  const summaryEl = document.getElementById('summaryStats');
  if (!summaryEl) return;
  const map = [
    ["운영 채널 수", siteData.summary.totalChannels],
    ["후보 주제 수", siteData.summary.totalCandidates],
    ["최종 선정 수", siteData.summary.finalPicks],
    ["즉시 편집 가능", siteData.summary.readyToEdit]
  ];
  summaryEl.innerHTML = map.map(([label, value]) => `
    <div class="stat">
      <div class="label">${label}</div>
      <div class="value">${value}</div>
    </div>
  `).join('');
}

function setUpdatedDate() {
  document.querySelectorAll('[data-updated-date]').forEach(el => {
    el.textContent = siteData.updatedDate;
  });
}

function renderChannelCards() {
  const grid = document.getElementById('channelGrid');
  if (!grid) return;
  const channels = Object.values(siteData.channels);
  grid.innerHTML = channels.map(ch => `
    <div class="card">
      <h3>${ch.name}</h3>
      <div class="muted">${ch.subtitle}</div>
      <div class="section badge-row">
        <div class="chip">오늘 주제: ${ch.todayTopic}</div>
        <div class="chip">우선순위: ${ch.uploadPriority}</div>
        <div class="chip">길이: ${ch.duration}</div>
      </div>
      <div class="section">
        <h3>후보 주제</h3>
        <ul class="list">${ch.candidates.map(v => `<li>${v}</li>`).join('')}</ul>
      </div>
      <div class="page-actions">
        <a class="button button-primary" href="${ch.path}">채널 페이지 열기</a>
      </div>
    </div>
  `).join('');
}

function renderChannelPage(channelKey) {
  const ch = siteData.channels[channelKey];
  if (!ch) return;

  document.getElementById('pageTitle').textContent = ch.name;
  document.getElementById('pageSubtitle').textContent = ch.subtitle;
  document.getElementById('todayTopic').textContent = ch.todayTopic;
  document.getElementById('uploadPriority').textContent = ch.uploadPriority;
  document.getElementById('duration').textContent = ch.duration;

  document.getElementById('candidates').innerHTML = ch.candidates.map(v => `<li>${v}</li>`).join('');
  document.getElementById('finalReason').innerHTML = ch.finalReason.map(v => `<li>${v}</li>`).join('');
  document.getElementById('sourceTypes').innerHTML = ch.sourceTypes.map(v => `<li>${v}</li>`).join('');
  document.getElementById('script').textContent = ch.script;
  document.getElementById('subtitles').innerHTML = ch.subtitles.map(v => `<li>${v}</li>`).join('');
  document.getElementById('visualPlan').innerHTML = ch.visualPlan.map(v => `<li>${v}</li>`).join('');
  document.getElementById('titles').innerHTML = ch.titles.map(v => `<li>${v}</li>`).join('');
  document.getElementById('notes').innerHTML = ch.notes.map(v => `<li>${v}</li>`).join('');

  document.getElementById('clickPoint').textContent = ch.kpis.clickPoint;
  document.getElementById('editingDifficulty').textContent = ch.kpis.editingDifficulty;
  document.getElementById('sourceStability').textContent = ch.kpis.sourceStability;
}

window.addEventListener('DOMContentLoaded', () => {
  setUpdatedDate();
  renderSummary();
  renderChannelCards();
});

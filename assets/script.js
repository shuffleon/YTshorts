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
        <h3>오늘 추천 1순위</h3>
        <div class="highlight-box">
          <strong>${ch.recommendedPick.title}</strong>
          <div class="muted small-gap">${ch.recommendedPick.why}</div>
        </div>
      </div>
      <div class="section">
        <h3>후보 주제</h3>
        <ul class="list">${ch.candidates.map(v => `<li>${v}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h3>소스 바로가기</h3>
        <div class="link-list">${ch.sourceLinks.slice(0, 2).map(v => `<a class="link-chip" href="${v.url}" target="_blank" rel="noopener noreferrer">${v.label}</a>`).join('')}</div>
      </div>
      <div class="page-actions">
        <a class="button button-primary" href="${ch.path}">채널 페이지 열기</a>
      </div>
    </div>
  `).join('');
}

function renderSimpleLinks(items) {
  return items.map(v => `
    <div class="source-item">
      <div><a href="${v.url}" target="_blank" rel="noopener noreferrer">${v.label}</a></div>
      <div class="muted">${v.note}</div>
    </div>
  `).join('');
}

function renderRecommendedTopics(items) {
  return items.map(v => `
    <div class="topic-card">
      <strong>${v.title}</strong>
      <div><span class="topic-label">각도</span> ${v.angle}</div>
      <div><span class="topic-label">예상 반응</span> ${v.expected}</div>
      <div><span class="topic-label">소스 힌트</span> ${v.sourceHint}</div>
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
  document.getElementById('recommendedTitle').textContent = ch.recommendedPick.title;
  document.getElementById('recommendedWhy').textContent = ch.recommendedPick.why;
  document.getElementById('recommendedHook').textContent = ch.recommendedPick.hook;

  document.getElementById('candidates').innerHTML = ch.candidates.map(v => `<li>${v}</li>`).join('');
  document.getElementById('finalReason').innerHTML = ch.finalReason.map(v => `<li>${v}</li>`).join('');
  document.getElementById('sourceTypes').innerHTML = ch.sourceTypes.map(v => `<li>${v}</li>`).join('');
  document.getElementById('script').textContent = ch.script;
  document.getElementById('subtitles').innerHTML = ch.subtitles.map(v => `<li>${v}</li>`).join('');
  document.getElementById('visualPlan').innerHTML = ch.visualPlan.map(v => `<li>${v}</li>`).join('');
  document.getElementById('titles').innerHTML = ch.titles.map(v => `<li>${v}</li>`).join('');
  document.getElementById('notes').innerHTML = ch.notes.map(v => `<li>${v}</li>`).join('');
  document.getElementById('sourceLinks').innerHTML = renderSimpleLinks(ch.sourceLinks);
  document.getElementById('recommendedTopics').innerHTML = renderRecommendedTopics(ch.recommendedTopics);

  document.getElementById('clickPoint').textContent = ch.kpis.clickPoint;
  document.getElementById('editingDifficulty').textContent = ch.kpis.editingDifficulty;
  document.getElementById('sourceStability').textContent = ch.kpis.sourceStability;
}

window.addEventListener('DOMContentLoaded', () => {
  setUpdatedDate();
  renderSummary();
  renderChannelCards();
});

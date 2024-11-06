<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import logo from '$lib/img/logo1.png';
  import back from '$lib/img/back.png';
</script>

<div class="relative w-full min-h-screen bg-black text-white overflow-hidden">
  <Header />

  <!-- 메인 컨테이너: 최대 너비 제한 및 패딩 최적화 -->
  <div class="container mx-auto max-w-[640px] px-4 pb-16">
    <!-- 이미지 컨테이너: 비율 유지 및 정확한 중앙 정렬 -->
    <div class="relative h-[500px] bg-black flex items-center justify-center">
      <img 
        src={back} 
        alt="" 
        class="absolute z-10 animate-spin-slow"
      />

      <img 
        src={logo} 
        alt="FOREST" 
        class="relative z-10 w-4/5 max-w-[400px]"
      />
    </div>

    <!-- 텍스트 컨텐츠: 간격 및 타이포그래피 최적화 -->
    <div class="relative z-20 mt-12 space-y-16">
      <!-- 학교/학과 정보 -->
      <section class="space-y-3">
        <div class="space-y-1.5">
          <p class="text-sm tracking-tight">배재대학교 아트앤드웹툰학부 디자인전공</p>
          <p class="text-base font-medium">제41회 디자인 졸업전시 프로젝트</p>
        </div>

        <div class="space-y-1 text-xs opacity-90">
          <p>Pai Chai University</p>
          <p>Department of Art and Webtoon</p>
          <p>Design Major</p>
        </div>

        <p class="text-base font-medium pt-1">41th Design Graduation Exhibition</p>
      </section>

      <!-- 설명 텍스트 -->
      <section class="space-y-3">
        <p class="text-base font-medium">숲:</p>
        <div class="text-sm leading-relaxed opacity-90 space-y-1.5">
          <p>각자의 뿌리로 단단히 성장하는 나무들이 모여,</p>
          <p>함께 숲을 이루는 우리는 끝없이 자라나는 가능성의 숲입니다.</p>
        </div>
      </section>

      <!-- 추가 정보 -->
      <section class="space-y-6">
        <div class="space-y-2">
          <p class="text-base font-medium">찾아오시는 길</p>
          <p class="text-sm opacity-90 leading-relaxed">
            대전광역시 유성구 테크노중앙로 227<br/>
            대전디자인진흥원 1층 대강당
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-base font-medium">프로젝트 참여자</p>
          <p class="text-sm opacity-90">곽준서 윤은파 이다빈 임수한 최준호</p>
        </div>
      </section>
    </div>
  </div>
</div>
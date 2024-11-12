<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import JunseoPark from '$lib/img/JunseoPark.jpg';
  import JunseoPark1 from '$lib/img/JunseoPark-1.jpg';
  import JunseoPark2 from '$lib/img/JunseoPark-2.jpg';
  import JunseoPark3 from '$lib/img/JunseoPark-3.jpg';
  import EunpaYoon from '$lib/img/EunpaYoon.jpg';
  import EunpaYoon1 from '$lib/img/EunpaYoon-1.jpg';
  import EunpaYoon2 from '$lib/img/EunpaYoon-2.jpg';
  import EunpaYoon3 from '$lib/img/EunpaYoon-3.jpg';
  import DabinLee from '$lib/img/DabinLee.jpg';
  import DabinLee1 from '$lib/img/DabinLee-1.jpg';
  import DabinLee2 from '$lib/img/DabinLee-2.jpg';
  import DabinLee3 from '$lib/img/DabinLee-3.jpg';
  import SoohanLim from '$lib/img/SoohanLim.jpg';
  import SoohanLim1 from '$lib/img/SoohanLim-1.jpg';
  import SoohanLim2 from '$lib/img/SoohanLim-2.jpg';
  import SoohanLim3 from '$lib/img/SoohanLim-3.jpg';
  import JunhoChoi from '$lib/img/JunhoChoi.jpg';
  import JunhoChoi1 from '$lib/img/JunhoChoi-1.jpg';
  import JunhoChoi2 from '$lib/img/JunhoChoi-2.jpg';
  import all1 from '$lib/img/all_1.jpg';
  import all2 from '$lib/img/all_2.jpg';
  import all3 from '$lib/img/all_3.jpg';

  // 터치 이벤트 위치 변수 초기값 설정
  let touchStartX: number = 0;
  let touchEndX: number = 0;

  // 팀 프로젝트 데이터
  const teamProjects = [
    { image: all1, title: "Team Project 1" },
    { image: all2, title: "Team Project 2" },
    { image: all3, title: "Team Project 3" }
  ];

  // 개인 프로젝트 데이터
  const individualProjects = [
    {
      photo: JunseoPark,
      name: "박준서",
      email: "gwonho1129@gmail.com",
      phone: "010-3221-7659",
      projects: [
        { image: JunseoPark1 },
        { image: JunseoPark2 },
        { image: JunseoPark3 },
      ]
    },
    {
      photo: EunpaYoon,
      name: "윤은파",
      email: "yooneunpa@naver.com",
      phone: "010-4552-4207",
      projects: [
        { image: EunpaYoon1 },
        { image: EunpaYoon2 },
        { image: EunpaYoon3 }
      ]
    },
    {
      photo: DabinLee,
      name: "이다빈",
      email: "davinchi_@naver.com",
      phone: "010-7941-1220",
      projects: [
        { image: DabinLee1 },
        { image: DabinLee2 },
        { image: DabinLee3 }
      ]
    },
    {
      photo: SoohanLim,
      name: "임수한",
      email: "hanbaby1204@naver.com",
      phone: "010-6365-1806",
      projects: [
        { image: SoohanLim1 },
        { image: SoohanLim2 },
        { image: SoohanLim3 }
      ]
    },
    {
      photo: JunhoChoi,
      name: "최준호",
      email: "masa2861@naver.com",
      phone: "010-2657-1608",
      projects: [
        { image: JunhoChoi1 },
        { image: JunhoChoi2 }
      ]
    }
  ];

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e: TouchEvent) {
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent, projectsContainer: HTMLElement) {
    const SWIPE_THRESHOLD = 50;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > SWIPE_THRESHOLD) {
      const scrollAmount = projectsContainer.offsetWidth * 0.8;
      if (difference > 0) {
        // 왼쪽으로 스와이프
        projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        // 오른쪽으로 스와이프
        projectsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }
</script>


<div class="relative w-full min-h-screen bg-[#080504] text-white overflow-hidden pb-16">
  <Header />
  
  <div class="w-full px-4 py-8">
    <!-- Team Projects -->
    <section class="mb-16">
      <h2 class="text-xl font-medium mb-6">TEAM PROJECT</h2>
      <div class="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {#each teamProjects as project}
          <div class="flex-shrink-0 w-[280px] bg-white snap-center" style="aspect-ratio: {project.image.split('/')[3]}/{project.image.split('/')[4]}">
            <img 
              src={project.image} 
              alt={project.title} 
              class="w-full h-full object-cover"
            />
          </div>
        {/each}
      </div>
    </section>

    <!-- Individual Projects -->
    <section>
      <h2 class="text-xl font-medium mb-8">INDIVIDUAL PROJECT</h2>
      <div class="space-y-16">
        {#each individualProjects as person}
          <div class="space-y-6">
            <!-- Profile -->
            <div class="flex items-start gap-4">
              <img
                src={person.photo}
                alt={person.name}
                class="w-24 h-32 bg-white object-cover"
              />
              <div class="flex flex-col gap-1 pt-1">
                <p class="text-sm">{person.name}</p>
                <p class="text-xs text-gray-400">{person.email}</p>
                <p class="text-xs text-gray-400">{person.phone}</p>
              </div>
            </div>

            <!-- Projects -->
            <div 
              class="overflow-x-auto no-scrollbar snap-x snap-mandatory"
              on:touchstart={handleTouchStart}
              on:touchmove={handleTouchMove}
              on:touchend={(e) => handleTouchEnd(e, e.currentTarget)}
            >
              <div class="flex gap-4">
                {#each person.projects as project}
                  <div class="flex-shrink-0 w-[280px] bg-white snap-center" style="aspect-ratio: {project.image.split('/')[3]}/{project.image.split('/')[4]}">
                    <img 
                      src={project.image} 
                      alt="project" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
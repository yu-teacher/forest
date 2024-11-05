<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  let touchStartX: number;
  let touchEndX: number;

  // 팀 프로젝트 데이터
  const teamProjects = [
    { image: "https://picsum.photos/300/200", title: "Team Project 1" },
    { image: "https://picsum.photos/400/200", title: "Team Project 2" },
    { image: "https://picsum.photos/300/300", title: "Team Project 3" }
  ];

  // 개인 프로젝트 데이터
  const individualProjects = [
    {
      photo: "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "홍길동",
      email: "example1@gmail.com",
      phone: "010-1234-5678",
      projects: [
        { image: "https://picsum.photos/300/400" },
        { image: "https://picsum.photos/400/300" },
        { image: "https://picsum.photos/300/300" },
        { image: "https://picsum.photos/400/400" }
      ]
    },
    {
      photo: "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "김철수",
      email: "example2@gmail.com",
      phone: "010-2345-6789",
      projects: [
        { image: "https://picsum.photos/350/450" },
        { image: "https://picsum.photos/450/350" },
        { image: "https://picsum.photos/350/350" }
      ]
    },
    {
      photo: "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "이영희",
      email: "example3@gmail.com",
      phone: "010-3456-7890",
      projects: [
        { image: "https://picsum.photos/320/420" },
        { image: "https://picsum.photos/420/320" },
        { image: "https://picsum.photos/320/320" },
        { image: "https://picsum.photos/420/420" },
        { image: "https://picsum.photos/380/420" }
      ]
    },
    {
      photo: "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "박민수",
      email: "example4@gmail.com",
      phone: "010-4567-8901",
      projects: [
        { image: "https://picsum.photos/380/480" },
        { image: "https://picsum.photos/480/380" }
      ]
    },
    {
      photo: "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "최지은",
      email: "example5@gmail.com",
      phone: "010-5678-9012",
      projects: [
        { image: "https://picsum.photos/340/440" },
        { image: "https://picsum.photos/440/340" },
        { image: "https://picsum.photos/340/340" },
        { image: "https://picsum.photos/440/440" }
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

<div class="relative w-full min-h-screen bg-black text-white overflow-hidden">
  <Header />
  
  <div class="w-full px-4 py-8">
    <!-- Team Projects -->
    <section class="mb-16">
      <h2 class="text-xl font-medium mb-6 px-2">TEAM PROJECT</h2>
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
      <h2 class="text-xl font-medium mb-8 px-2">INDIVIDUAL PROJECT</h2>
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
              <div class="flex gap-4 px-4">
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
<script lang="ts">
  import dateImg from "$lib/img/date.png";
  import { page } from '$app/stores';
</script>

<header class="w-full p-4 mt-4">
  <div class="flex justify-between">
    <!-- 왼쪽: 날짜 이미지와 장소 -->
    <div class="flex flex-col items-start gap-1">
      <img
        src={dateImg}
        alt="2024.11.21-11.25"
        class="h-6"
      />
      <span class="text-white text-xs">
        대전 디자인진흥원 1층 대강당
      </span>
    </div>

    <!-- 오른쪽: 네비게이션 링크들 -->
    <div class="flex flex-col items-end gap-2">
      <a 
        href="/" 
        class="text-white text-sm px-3 py-0.5 rounded-md {$page.url.pathname === '/' ? 'bg-green-600' : ''}"
      >
        HOME
      </a>
      <a 
        href="/greetings" 
        class="text-white text-sm px-3 py-0.5 rounded-md {$page.url.pathname === '/greetings' ? 'bg-green-600' : ''}"
      >
        GREETINGS
      </a>
      <a 
        href="/project" 
        class="text-white text-sm px-3 py-0.5 rounded-md {$page.url.pathname === '/project' ? 'bg-green-600' : ''}"
      >
        PROJECT
      </a>
    </div>
  </div>
</header>
<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  const staffData = [
    {
      photo:
        "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "성명",
      position: "직책",
      description: "반가워요잇!",
    },
    {
      photo:
        "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "성명",
      position: "직책",
      description: "반가워요잇!",
    },
    {
      photo:
        "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "성명",
      position: "직책",
      description: "반가워요잇!",
    },
    {
      photo:
        "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png",
      name: "성명",
      position: "직책",
      description: "반가워요잇!",
    },
  ];
</script>

<div class="relative w-full min-h-screen bg-black text-white overflow-hidden">
  <Header />

  <div class="w-full bg-black text-white px-12">
    <div class="container mx-auto max-w-[800px] mt-8">
      <div class="flex flex-col gap-16">
        {#each staffData as staff}
          <div class="flex gap-4 items-start">
            <div class="flex flex-col items-center gap-2">
              <img
                src={staff.photo}
                alt={staff.name}
                class="w-32 h-40 bg-white object-cover"
              />
              <p class="text-sm">{staff.name}</p>
              <p class="text-xs text-gray-400">{staff.position}</p>
            </div>
            <div class="w-96 h-48 bg-white p-4 text-black">
              {staff.description}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

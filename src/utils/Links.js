import { activegroup, activehome, activeLayers, activePlaylist, activeSearch, activeVideo, home, layers, playlist, search, ticket, videos } from "../assets";

export const Links = [
    {
        name: 'Home',
        active: activehome,
        route: '/home',
        imgUrl: home,
      },
      {
        name: 'Search',
        imgUrl:  search,
        route: '/dashboard/search',
        active: activeSearch,
      },
      {
        name: 'Library',
        imgUrl:  layers,
        route: '/dashboard/library',
        active: activeLayers,
      },
      {
        name: 'Playlist',
        imgUrl:  playlist,
        route: '/dashboard/playlist',
        active: activePlaylist,
      },
      {
        name: 'Ticket',
        imgUrl:  ticket,
        route: '/dashboard/ticket',
        active: activegroup,
      },
      {
        name: 'Videos',
        imgUrl:  videos,
        route: '/videos',
        active: activeVideo,
      },
      
   
]
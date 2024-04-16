interface movie {
  id: string | number;
  title: string;
  arabicTitle: string;
  poster_path: string;
  year?: number;
  work_type: string;
}

interface similarMovie {
  title: string;
  poster: string;
  year?: number;
}

interface cast {
  id: string;
  name: string;
  profile_picture: string;
}

interface userReview {
  id: number;
  user_id: number;
  review: string;
  created_at: string;
  updated_at: string;
  user_rating: string;
  work_id: string;
  username: string;
  profile_picture_url: string;
  work_poster?: string;
  work_title?: string;
  work_type: string;
}

interface UserList {
  id: number;
  user_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  works_id: {
    id: number;
    poster_path: string;
    title: string;
    arabicTitle: string;
    work_type: string;
  }[];
  username: string;
  profile_picture_url: string;
  works_number: number;
  media_type?: string;
}
interface aMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any; // You can define a specific type for collection if needed comes null
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  episode_run_time?: number;
  number_of_seasons?: number;
  name: string;
  first_air_date: string;
}

interface ShowDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
  } | null;
  name: string;
  next_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
  } | null;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

interface People {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Assuming profile_path can be null
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Assuming profile_path can be null
  credit_id: string;
  department: string;
  job: string;
  media_type?: string;
}

interface allMovieDetails {
  englishTitle: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any; // You can define a specific type for collection if needed comes null
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: People[];
  crew: CrewMember[];
  reviews: userReview[];
  similarMovies: movie[];
  media_type?: string;
  arabicTitle?: string;
}

interface allSerieDetails {
  englishName: string;
  adult: boolean;
  backdrop_path: string;
  created_by: any[]; // Update with the correct type if needed
  episode_run_time: number[]; // Update with the correct type if needed
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  };
  media_type?: string;
  name: string;
  next_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string | null;
  };
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  cast: People[];
  crew: CrewMember[];
  reviews: userReview[];
  similarMovies: movie[];
  arabicTitle: string;
}

interface ProfileUserReview {
  id: number;
  user_id: number;
  review: string;
  created_at: string;
  updated_at: string;
  user_rating: string;
  work_id: aMovie;
  work_type: string;
}

interface userData {
  user_id: number;
  username: string;
  full_name: string | null;
  date_of_birth: string | null;
  country: string;
  phone_number: string;
  instagram_url: string | null;
  tiktok_url: string | null;
  twitter_url: string | null;
  facebook_url: string | null;
  profile_picture_url: string;
  cover_picture_url: string | null;
  bio: string | null;
  status: string;
  media_type?: string;
}

interface Notifications {
  id: number;
  creator_id: number;
  created_at: string;
  status: number;
  receiver_id: number;
  related_work_id: any;
  related_work_type: "movie" | "tv" | string;
  username: string;
  profile_picture_url: string;
  notification_type: string;
}

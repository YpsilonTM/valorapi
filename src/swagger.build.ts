/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum Regions {
  Eu = "eu",
  Na = "na",
  Ap = "ap",
  Kr = "kr",
}

export enum Affinities {
  Eu = "eu",
  Na = "na",
  Latam = "latam",
  Br = "br",
  Ap = "ap",
  Kr = "kr",
}

export enum PremierConferences {
  EU_CENTRAL_EAST = "EU_CENTRAL_EAST",
  EU_WEST = "EU_WEST",
  EU_MIDDLE_EAST = "EU_MIDDLE_EAST",
  EU_TURKEY = "EU_TURKEY",
  NA_US_EAST = "NA_US_EAST",
  NA_US_WEST = "NA_US_WEST",
  LATAM_NORTH = "LATAM_NORTH",
  LATAM_SOUTH = "LATAM_SOUTH",
  BR_BRAZIL = "BR_BRAZIL",
  KR_KOREA = "KR_KOREA",
  AP_ASIA = "AP_ASIA",
  AP_JAPAN = "AP_JAPAN",
  AP_OCEANIA = "AP_OCEANIA",
  AP_SOUTH_ASIA = "AP_SOUTH_ASIA",
}

export enum PremierSeasonsEventTypes {
  LEAGUE = "LEAGUE",
  TOURNAMENT = "TOURNAMENT",
}

export enum PremierSeasonsEventMapSelectionTypes {
  RANDOM = "RANDOM",
  PICKBAN = "PICKBAN",
}

export enum Maps {
  Ascent = "Ascent",
  Split = "Split",
  Fracture = "Fracture",
  Bind = "Bind",
  Breeze = "Breeze",
  District = "District",
  Kasbah = "Kasbah",
  Piazza = "Piazza",
  Lotus = "Lotus",
  Pearl = "Pearl",
  Icebox = "Icebox",
  Haven = "Haven",
}

export enum Modes {
  Competitive = "Competitive",
  CustomGame = "Custom Game",
  Deathmatch = "Deathmatch",
  Escalation = "Escalation",
  TeamDeathmatch = "Team Deathmatch",
  NewMap = "New Map",
  Replication = "Replication",
  SnowballFight = "Snowball Fight",
  SpikeRush = "Spike Rush",
  Swiftplay = "Swiftplay",
  Unrated = "Unrated",
}

export enum ModesApi {
  Competitive = "competitive",
  Custom = "custom",
  Deathmatch = "deathmatch",
  Escalation = "escalation",
  Teamdeathmatch = "teamdeathmatch",
  Newmap = "newmap",
  Replication = "replication",
  Snowballfight = "snowballfight",
  Spikerush = "spikerush",
  Swiftplay = "swiftplay",
  Unrated = "unrated",
}

export enum ModeIds {
  Competitive = "competitive",
  Custom = "custom",
  Deathmatch = "deathmatch",
  Ggteam = "ggteam",
  Hurm = "hurm",
  Newmap = "newmap",
  Onefa = "onefa",
  Snowball = "snowball",
  Spikerush = "spikerush",
  Swiftplay = "swiftplay",
  Unrated = "unrated",
}

export enum Tiers {
  Unrated = "Unrated",
  Unknown1 = "Unknown 1",
  Unknown2 = "Unknown 2",
  Iron1 = "Iron 1",
  Iron2 = "Iron 2",
  Iron3 = "Iron 3",
  Bronze1 = "Bronze 1",
  Bronze2 = "Bronze 2",
  Bronze3 = "Bronze 3",
  Silver1 = "Silver 1",
  Silver2 = "Silver 2",
  Silver3 = "Silver 3",
  Gold1 = "Gold 1",
  Gold2 = "Gold 2",
  Gold3 = "Gold 3",
  Platinum1 = "Platinum 1",
  Platinum2 = "Platinum 2",
  Platinum3 = "Platinum 3",
  Diamond1 = "Diamond 1",
  Diamond2 = "Diamond 2",
  Diamond3 = "Diamond 3",
  Ascendant1 = "Ascendant 1",
  Ascendant2 = "Ascendant 2",
  Ascendant3 = "Ascendant 3",
  Immortal1 = "Immortal 1",
  Immortal2 = "Immortal 2",
  Immortal3 = "Immortal 3",
  Radiant = "Radiant",
}

export enum TiersOld {
  Unrated = "Unrated",
  Unknown1 = "Unknown 1",
  Unknown2 = "Unknown 2",
  Iron1 = "Iron 1",
  Iron2 = "Iron 2",
  Iron3 = "Iron 3",
  Bronze1 = "Bronze 1",
  Bronze2 = "Bronze 2",
  Bronze3 = "Bronze 3",
  Silver1 = "Silver 1",
  Silver2 = "Silver 2",
  Silver3 = "Silver 3",
  Gold1 = "Gold 1",
  Gold2 = "Gold 2",
  Gold3 = "Gold 3",
  Platinum1 = "Platinum 1",
  Platinum2 = "Platinum 2",
  Platinum3 = "Platinum 3",
  Diamond1 = "Diamond 1",
  Diamond2 = "Diamond 2",
  Diamond3 = "Diamond 3",
  Immortal1 = "Immortal 1",
  Immortal2 = "Immortal 2",
  Immortal3 = "Immortal 3",
  Radiant = "Radiant",
}

export enum Platforms {
  PC = "PC",
  Console = "Console",
}

export enum Seasons {
  E1A1 = "e1a1",
  E1A2 = "e1a2",
  E1A3 = "e1a3",
  E2A1 = "e2a1",
  E2A2 = "e2a2",
  E2A3 = "e2a3",
  E3A1 = "e3a1",
  E3A2 = "e3a2",
  E3A3 = "e3a3",
  E4A1 = "e4a1",
  E4A2 = "e4a2",
  E4A3 = "e4a3",
  E5A1 = "e5a1",
  E5A2 = "e5a2",
  E5A3 = "e5a3",
  E6A1 = "e6a1",
  E6A2 = "e6a2",
  E6A3 = "e6a3",
  E7A1 = "e7a1",
  E7A2 = "e7a2",
  E7A3 = "e7a3",
}

export interface BySeason {
  /** @example false */
  error?: boolean | null;
  /** @example 12 */
  wins?: number;
  /** @example 24 */
  number_of_games?: number;
  /** @example 12 */
  final_rank?: number;
  /** @example "Gold 1" */
  final_rank_patched?: string;
  act_rank_wins?: {
    /** @example "Gold 1" */
    patched_tier?: string;
    /** @example 12 */
    tier?: number;
  }[];
  /** @example true */
  old?: boolean;
}

export interface Player {
  /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
  puuid?: string;
  /** @example "Henrik3" */
  name?: string;
  /** @example "EUW3" */
  tag?: string;
  /** @example "Red" */
  team?: string;
  /** @example 104 */
  level?: number;
  /** @example "Sova" */
  character?: string;
  /** @example 12 */
  currenttier?: number;
  /** @example "Gold 1" */
  currenttier_patched?: string;
  /** @example "8edf22c5-4489-ab41-769a-07adb4c454d6" */
  player_card?: string;
  /** @example "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa" */
  player_title?: string;
  /** @example "b7590bd4-e2c9-4dd3-8cbf-05f04158375e" */
  party_id?: string;
  session_playtime?: {
    /** @example 26 */
    minutes?: number;
    /** @example 1560 */
    seconds?: number;
    /** @example 1560000 */
    milliseconds?: number;
  };
  assets?: {
    card?: {
      /** @example "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png" */
      small?: string;
      /** @example "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png" */
      large?: string;
      /** @example "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png" */
      wide?: string;
    };
    agent?: {
      /** @example "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png" */
      small?: string;
      /** @example "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png" */
      full?: string;
      /** @example "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/bustportrait.png" */
      bust?: string;
      /** @example "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png" */
      killfeed?: string;
    };
  };
  behaviour?: {
    /** @example 0 */
    afk_rounds?: number;
    friendly_fire?: {
      /** @example 0 */
      incoming?: number;
      /** @example 0 */
      outgoing?: number;
    };
    /** @example 0 */
    rounds_in_spawn?: number;
  };
  platform?: {
    /** @example "PC" */
    type?: string;
    os?: {
      /** @example "Windows" */
      name?: string;
      /** @example "10.0.22000.1.768.64bit" */
      version?: string;
    };
  };
  ability_casts?: {
    /** @example 16 */
    c_cast?: number | null;
    /** @example 5 */
    q_cast?: number | null;
    /** @example 26 */
    e_cast?: number | null;
    /** @example 0 */
    x_cast?: number | null;
  };
  stats?: {
    /** @example 4869 */
    score?: number;
    /** @example 18 */
    kills?: number;
    /** @example 18 */
    deaths?: number;
    /** @example 5 */
    assists?: number;
    /** @example 48 */
    bodyshots?: number;
    /** @example 9 */
    headshots?: number;
    /** @example 5 */
    legshots?: number;
  };
  economy?: {
    spent?: {
      /** @example 59750 */
      overall?: number;
      /** @example 2598 */
      average?: number;
    };
    loadout_value?: {
      /** @example 71700 */
      overall?: number;
      /** @example 3117 */
      average?: number;
    };
  };
  /** @example 3067 */
  damage_made?: number;
  /** @example 3115 */
  damage_received?: number;
}

export interface Observer {
  /** @format uuid */
  puuid?: string;
  name?: string;
  tag?: string;
  platform?: {
    /** @example "PC" */
    type?: string;
    os?: {
      /** @example "Windows" */
      name?: string;
      /** @example "10.0.22000.1.768.64bit" */
      version?: string;
    };
  };
  session_playtime?: {
    /** @example 26 */
    minutes?: number;
    /** @example 1560 */
    seconds?: number;
    /** @example 1560000 */
    milliseconds?: number;
  };
  team?: string;
  level?: number;
  /** @format uuid */
  player_card?: string;
  /** @format uuid */
  player_title?: string;
  /** @format uuid */
  party_id?: string;
}

export interface Coach {
  /** @format uuid */
  puuid?: string;
  team?: string;
}

export interface Team {
  /** @example true */
  has_won?: boolean | null;
  /** @example 13 */
  rounds_won?: number | null;
  /** @example 10 */
  rounds_lost?: number | null;
  roaster?: {
    members?: string[];
    name?: string;
    tag?: string;
    customization?: {
      icon?: string;
      image?: string;
      primary?: string;
      secondary?: string;
      tertiary?: string;
    };
  } | null;
}

export interface Match {
  metadata?: {
    map?: Maps;
    /** @example "release-03.12-shipping-16-649370" */
    game_version?: string;
    /** @example 2356581 */
    game_length?: number;
    /** @example 1641934366 */
    game_start?: number;
    /** @example "Tuesday, January 11, 2022 9:52 PM" */
    game_start_patched?: string;
    /** @example 23 */
    rounds_played?: number;
    mode?: Modes;
    mode_id?: ModeIds;
    /** @example "Standard" */
    queue?: string;
    /** @format uuid */
    season_id?: string;
    /** @example "PC" */
    platform?: string;
    /** @format uuid */
    matchid?: string;
    premier_info?: {
      tournament_id?: string | null;
      matchup_id?: string | null;
    };
    region?: Regions;
    /** @example "London" */
    cluster?: string;
  };
  players?: {
    all_players?: Player[];
    red?: Player[];
    blue?: Player[];
  };
  observers?: Observer[];
  coaches?: Coach[];
  teams?: {
    red?: Team;
    blue?: Team;
  };
  rounds?: {
    /** @example "Red" */
    winning_team?: string;
    /** @example "Eliminated" */
    end_type?: string;
    /** @example true */
    bomb_planted?: boolean | null;
    /** @example false */
    bomb_defused?: boolean | null;
    plant_events?: {
      plant_location?: {
        /** @example -1325 */
        x?: number;
        /** @example -1325 */
        y?: number;
      } | null;
      planted_by?: {
        /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
        puuid?: string;
        /** @example "Henrik3#EUW3" */
        display_name?: string;
        /** @example "Red" */
        team?: string;
      } | null;
      /** @example "A" */
      plant_site?: string | null;
      /** @example 26345 */
      plant_time_in_round?: number | null;
      player_locations_on_plant?:
        | {
            /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
            player_puuid?: string;
            /** @example "Henrik3#EUW3" */
            player_display_name?: string;
            /** @example "Red" */
            player_team?: string;
            location?: {
              /** @example 5177 */
              x?: number;
              /** @example -8908 */
              y?: number;
            };
            /**
             * @format double
             * @example 0.5277854
             */
            view_radians?: number;
          }[]
        | null;
    };
    defuse_events?: {
      defuse_location?: {
        /** @example -1325 */
        x?: number;
        /** @example -1325 */
        y?: number;
      } | null;
      defused_by?: {
        /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
        puuid?: string;
        /** @example "Henrik3#EUW3" */
        display_name?: string;
        /** @example "Red" */
        team?: string;
      } | null;
      /** @example 26345 */
      defuse_time_in_round?: number | null;
      player_locations_on_defuse?:
        | {
            /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
            player_puuid?: string;
            /** @example "Henrik3#EUW3" */
            player_display_name?: string;
            /** @example "Red" */
            player_team?: string;
            location?: {
              /** @example 5177 */
              x?: number;
              /** @example -8908 */
              y?: number;
            };
            /**
             * @format double
             * @example 0.5277854
             */
            view_radians?: number;
          }[]
        | null;
    };
    player_stats?: {
      ability_casts?: {
        /** @example 2 */
        c_casts?: number | null;
        /** @example 5 */
        q_casts?: number | null;
        /** @example 20 */
        e_casts?: number | null;
        /** @example 1 */
        x_casts?: number | null;
      };
      /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
      player_puuid?: string;
      /** @example "Henrik3#EUW3" */
      player_display_name?: string;
      /** @example "Red" */
      player_team?: string;
      /** @default [] */
      damage_events?: {
        /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
        receiver_puuid?: string;
        /** @example "Henrik3#EUW3" */
        receiver_display_name?: string;
        /** @example "Red" */
        receiver_team?: string;
        /** @example 3 */
        bodyshots?: number;
        /** @example 156 */
        damage?: number;
        /** @example 1 */
        headshots?: number;
        /** @example 0 */
        legshots?: number;
      }[];
      /** @example 282 */
      damage?: number;
      /** @example 7 */
      bodyshots?: number;
      /** @example 1 */
      headshots?: number;
      /** @example 1 */
      legshots?: number;
      /** @default [] */
      kill_events?: {
        /** @example 43163 */
        kill_time_in_round?: number;
        /** @example 890501 */
        kill_time_in_match?: number;
        /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
        killer_puuid?: string;
        /** @example "Henrik3#EUW3" */
        killer_display_name?: string;
        /** @example "Red" */
        killer_team?: string;
        /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
        victim_puuid?: string;
        /** @example "Henrik3#EUW3" */
        victim_display_name?: string;
        /** @example "Red" */
        victim_team?: string;
        victim_death_location?: {
          /** @example 7266 */
          x?: number;
          /** @example -5096 */
          y?: number;
        };
        /** @example "9C82E19D-4575-0200-1A81-3EACF00CF872" */
        damage_weapon_id?: string;
        /** @example "Vandal" */
        damage_weapon_name?: string;
        damage_weapon_assets?: {
          /** @example "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png" */
          display_icon?: string;
          /** @example "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/killstreamicon.png" */
          killfeed_icon?: string;
        };
        /** @example false */
        secondary_fire_mode?: boolean;
        /** @default [] */
        player_locations_on_kill?: {
          /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
          player_puuid?: string;
          /** @example "Henrik3#EUW3" */
          player_display_name?: string;
          /** @example "Red" */
          player_team?: string;
          location?: {
            /** @example 5177 */
            x?: number;
            /** @example -8908 */
            y?: number;
          };
          /**
           * @format double
           * @example 0.5277854
           */
          view_radians?: number;
        }[];
        /** @default [] */
        assistants?: {
          /** @example "54942ced-1967-5f66-8a16-1e0dae875641" */
          assistant_puuid?: string;
          /** @example "Henrik3#EUW3" */
          assistant_display_name?: string;
          /** @example "Red" */
          assistant_team?: string;
        }[];
      }[];
      /** @example 2 */
      kills?: number;
      /** @example 430 */
      score?: number;
      economy?: {
        /** @example 3900 */
        loadout_value?: number;
        weapon?: {
          /** @example "462080D1-4035-2937-7C09-27AA2A5C27A7" */
          id?: string;
          /** @example "Spectre" */
          name?: string;
          assets?: {
            /** @example "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png" */
            display_icon?: string;
            /** @example "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/killstreamicon.png" */
            killfeed_icon?: string;
          };
        };
        armor?: {
          /** @example "822BCAB2-40A2-324E-C137-E09195AD7692" */
          id?: string;
          /** @example "Heavy Shields" */
          name?: string;
          assets?: {
            /** @example "https://media.valorant-api.com/gear/822bcab2-40a2-324e-c137-e09195ad7692/displayicon.png" */
            display_icon?: string;
          };
        };
        /** @example 5300 */
        remaining?: number;
        /** @example 1550 */
        spent?: number;
      };
      /** @example false */
      was_afk?: boolean;
      /** @example false */
      was_penalized?: boolean;
      /** @example false */
      stayed_in_spawn?: boolean;
    }[];
  }[];
}

export type Content = {
  name?: string;
  localizedNames?: {
    "ar-AE"?: string;
    "de-DE"?: string;
    "en-GB"?: string;
    "en-US"?: string;
    "es-ES"?: string;
    "es-MX"?: string;
    "fr-FR"?: string;
    "id-ID"?: string;
    "it-IT"?: string;
    "ja-JP"?: string;
    "ko-KR"?: string;
    "pl-PL"?: string;
    "pt-BR"?: string;
    "ru-RU"?: string;
    "th-TH"?: string;
    "tr-TR"?: string;
    "vi-VN"?: string;
    "zn-CN"?: string;
    "zn-TW"?: string;
  }[];
  id?: string;
  assetName?: string;
  assetPath?: string;
}[];

export type Leaderboard = {
  /** @example "8edf22c5-4489-ab41-769a-07adb4c454d6" */
  PlayerCardID?: string;
  /** @example "82de085a-4c2b-da95-a139-048e4ce83dae" */
  TitleID?: string;
  /** @example false */
  IsBanned?: boolean;
  /** @example false */
  IsAnonymized?: boolean;
  /** @example "c3b5b276-a43d-53f2-a897-038bc60b6682" */
  puuid?: string;
  /** @example "Liquid ScreaM" */
  gameName?: string;
  /** @example "1TAP" */
  tagLine?: string;
  /** @example 1 */
  leaderboardRank?: number;
  /** @example 1222 */
  rankedRating?: number;
  /** @example 67 */
  numberOfWins?: number;
  /** @example 24 */
  competitiveTier?: number;
}[];

export type Status = {
  /** @example "2022-01-12T22:11:07.530569+00:00" */
  created_at?: string;
  /** @example "2022-01-13T10:00:00.000000+00:00" */
  archive_at?: string | null;
  updates?: {
    /** @example "2022-01-12T22:11:07.645499+00:00" */
    created_at?: string;
    /** @example "2022-01-12T23:00:00.000000+00:00" */
    updated_at?: string | null;
    /** @example true */
    publish?: boolean;
    /** @example 6658 */
    id?: number;
    translations?: {
      /** @example "The platform is currently unavailable while we perform emergency maintenance." */
      content?: string;
      /** @example "en_US" */
      locale?: string;
    }[];
    publish_locations?: string[];
    /** @example "Riot Games" */
    author?: string;
  }[];
  platforms?: string[];
  /** @example "2022-01-12T23:00:00.000000+00:00" */
  updated_at?: string | null;
  /** @example 4175 */
  id?: number;
  titles?: {
    /** @example "Emergency Maintenance In Progress" */
    content?: string;
    /** @example "en_US" */
    locale?: string;
  }[];
  /** @example "in_progress" */
  maintenance_status?: string;
  /** @example "warning" */
  incident_severity?: string | null;
}[];

export interface V1Mmr {
  /** @example 200 */
  status?: number;
  data?: {
    /** @example 12 */
    currenttier?: number | null;
    /** @example "Gold 1" */
    currenttier_patched?: string | null;
    images?: {
      small?: string | null;
      large?: string | null;
      triangle_down?: string | null;
      triangle_up?: string | null;
    };
    /** @example 20 */
    ranking_in_tier?: number | null;
    /** @example -16 */
    mmr_change_to_last_game?: number | null;
    /** @example 920 */
    elo?: number | null;
    /** @example "Henrik3" */
    name?: string | null;
    /** @example "EUW3" */
    tag?: string | null;
    /** @example true */
    old?: boolean;
  };
}

export interface V2Mmr {
  /** @example 200 */
  status?: number;
  data?: {
    /** @example "Henrik3" */
    name?: string | null;
    /** @example "EUW3" */
    tag?: string | null;
    current_data?: {
      /** @example 12 */
      currenttier?: number | null;
      /** @example "Gold 1" */
      currenttier_patched?: string | null;
      images?: {
        small?: string | null;
        large?: string | null;
        triangle_down?: string | null;
        triangle_up?: string | null;
      };
      /** @example 20 */
      ranking_in_tier?: number | null;
      /** @example -16 */
      mmr_change_to_last_game?: number | null;
      /** @example 920 */
      elo?: number | null;
      /** @example true */
      old?: boolean;
    };
    highest_rank?: {
      /** @example false */
      old?: boolean;
      /** @example 19 */
      tier?: number | null;
      /** @example "Diamond 2" */
      patched_tier?: string | null;
      /** @example "e5a3" */
      season?: string | null;
    };
    by_season?: {
      e6a3?: BySeason;
      e6a2?: BySeason;
      e6a1?: BySeason;
      e5a3?: BySeason;
      e5a2?: BySeason;
      e5a1?: BySeason;
      e4a3?: BySeason;
      e4a2?: BySeason;
      e4a1?: BySeason;
      e3a3?: BySeason;
      e3a2?: BySeason;
      e3a1?: BySeason;
      e2a3?: BySeason;
      e2a2?: BySeason;
      e2a1?: BySeason;
      e1a3?: BySeason;
      e1a2?: BySeason;
      e1a1?: BySeason;
    };
  };
}

export interface V1Mmrh {
  /** @example 200 */
  status?: number;
  /** @example "Henrik3" */
  name?: string;
  /** @example "EUW3" */
  tag?: string;
  data?: {
    /** @example 12 */
    currenttier?: number;
    /** @example "Gold 1" */
    currenttier_patched?: string;
    images?: {
      small?: string;
      large?: string;
      triangle_down?: string;
      triangle_up?: string;
    };
    /** @example "e5a3301c-c8e5-43bc-be94-a5c0d5275fd4" */
    match_id?: string;
    map?: {
      /** @example "Icebox" */
      name?: string;
      /** @example "e2ad5c54-4114-a870-9641-8ea21279579a" */
      id?: string;
    };
    /** @example "34093c29-4306-43de-452f-3f944bde22be" */
    season_id?: string;
    /** @example 20 */
    ranking_in_tier?: number;
    /** @example -16 */
    mmr_change_to_last_game?: number;
    /** @example 920 */
    elo?: number;
    /** @example "Tuesday, January 11, 2022 9:52 PM" */
    date?: string;
    /** @example 1641934366 */
    date_raw?: number;
  }[];
}

export interface V3Matches {
  /** @example 200 */
  status?: string;
  data?: Match[];
}

export type V1Leaderboard = Leaderboard;

export interface V2Leaderboard {
  /** @example 1641219805 */
  last_update?: number;
  /** @example 1641222865 */
  next_update?: number;
  /** @example 37463 */
  total_players?: number;
  /** @example 550 */
  radiant_threshold?: number;
  /** @example 200 */
  immortal_3_threshold?: number;
  /** @example 100 */
  immortal_2_threshold?: number;
  /** @example 0 */
  immortal_1_threshold?: number;
  players?: Leaderboard;
}

export interface BundleRaw {
  ID?: string;
  DataAssetID?: string;
  CurrencyID?: string;
  Items?: {
    Item?: {
      ItemTypeID?: string;
      ItemID?: string;
      Amount?: string;
    };
    BasePrice?: number;
    CurrencyID?: string;
    DiscountPercent?: number;
    DiscountedPrice?: number;
    IsPromoItem?: boolean;
  }[];
  DurationRemainingInSeconds?: number;
  Wholesaleonly?: boolean;
}

export interface BundleParsed {
  bundle_uuid?: string;
  seconds_remaining?: number;
  bundle_price?: number;
  whole_sale_only?: boolean;
  expires_at?: string;
  items?: {
    uuid?: string;
    name?: string;
    image?: string;
    type?: string;
    amount?: number;
    discount_percent?: number;
    base_price?: number;
    discounted_price?: number;
    promo_item?: boolean;
  }[];
}

export interface V1Storefeatured {
  status?: number;
  data?: {
    FeaturedBundle?: {
      Bundle?: BundleRaw;
      Bundles?: BundleRaw[];
      BundleRemainingDurationInSeconds?: number;
    };
  };
}

export interface V2Storefeatured {
  status?: number;
  data?: BundleParsed[];
}

export interface V2Storeoffer {
  /** @example "a3dba920-44ee-d7c5-5227-99a80aee3bd9" */
  offer_id?: string;
  /** @example 2175 */
  cost?: number;
  /** @example "Araxys Vandal" */
  name?: string;
  /** @example "https://media.valorant-api.com/weaponskinlevels/a3dba920-44ee-d7c5-5227-99a80aee3bd9/displayicon.png" */
  icon?: string | null;
  type?: "skin_level" | "skin_chroma" | "buddy" | "spray" | "player_card" | "player_title";
  /** @example "4c926aa9-4f26-bc80-c486-9b888333373f" */
  skin_id?: string;
  content_tier?: {
    /** @example "Deluxe Edition" */
    name?: string;
    /** @example "Exclusive" */
    dev_name?: string;
    /** @example "https://media.valorant-api.com/contenttiers/e046854e-406c-37f4-6607-19a9ba8426fc/displayicon.png" */
    icon?: string;
  };
}

export interface V2Storeoffers {
  status?: number;
  data?: {
    offers?: V2Storeoffer[];
  };
}

export interface V1Esportscheduleitem {
  /** @example "2023-01-17T20:00:00Z" */
  date?: string;
  /** @example "completed" */
  state?: string;
  /** @example "match" */
  type?: string;
  /** @example "https://youtu.be/PrQ-LBZ4W-E" */
  vod?: string | null;
  league?: {
    /** @example "Challengers DACH" */
    name?: string;
    /** @example "vrl_dach" */
    identifier?: string;
    /** @example "https://static.lolesports.com/leagues/1672932144616_DACH_ICON_400_400.png" */
    icon?: string;
    /** @example "EMEA" */
    region?: string;
  };
  tournament?: {
    /** @example "challengers_emea_leagues_split_1" */
    name?: string;
    /** @example "2023" */
    season?: string;
  };
  match?: {
    /** @example "109625073196211557" */
    id?: string | null;
    game_type?: {
      type?: "playAll" | "bestOf" | null;
      /** @example 2 */
      count?: number | null;
    };
    teams?: {
      /** @example "Angry Titans" */
      name?: string;
      /** @example "AT" */
      code?: string;
      /** @example "https://static.lolesports.com/teams/1644488801867_AT_red_icon2x.png" */
      icon?: string;
      /** @example false */
      has_won?: boolean;
      /** @example 0 */
      game_wins?: number;
      record?: {
        /** @example 0 */
        wins?: number;
        /** @example 1 */
        losses?: number;
      };
    }[];
  };
}

export interface V1Esportschedule {
  status?: number;
  data?: V1Esportscheduleitem[];
}

export interface V1LifetimeMatchesItem {
  meta?: {
    id?: string;
    map?: {
      id?: string;
      name?: string | null;
    };
    version?: string;
    mode?: string;
    started_at?: string;
    season?: {
      id?: string;
      short?: string | null;
    };
    region?: string | null;
    cluster?: string | null;
  };
  stats?: {
    puuid?: string;
    team?: string;
    level?: number;
    character?: {
      id?: string;
      name?: string | null;
    };
    tier?: number;
    score?: number;
    kills?: number;
    deaths?: number;
    assists?: number;
    shots?: {
      head?: number;
      body?: number;
      leg?: number;
    };
    damage?: {
      made?: number;
      received?: number;
    };
  };
  teams?: {
    red?: number | null;
    blue?: number | null;
  };
}

export interface V1LifetimeMatches {
  status?: number;
  name?: string;
  tag?: string;
  results?: {
    total?: number;
    returned?: number;
    before?: number;
    after?: number;
  };
  data?: V1LifetimeMatchesItem[];
}

export interface V1PremierTeam {
  status?: number;
  data?: {
    /** @format uuid */
    id?: string;
    name?: string;
    tag?: string;
    enrolled?: boolean;
    stats?: {
      wins?: number;
      matches?: number;
      losses?: number;
    };
    placement?: {
      points?: number;
      conference?: string;
      /**
       * @min 1
       * @max 20
       */
      division?: number;
      place?: number;
    };
    customization?: {
      icon?: string;
      image?: string;
      primary?: string;
      secondary?: string;
      tertiary?: string;
    };
    member?: {
      puuid?: string;
      name?: string | null;
      tag?: string | null;
    }[];
  };
}

export interface V1PremierTeamHistory {
  status?: number;
  data?: {
    league_matches?: {
      /** @format uuid */
      id?: string;
      points_before?: number;
      points_after?: number;
      /** @format date-time */
      started_at?: string;
    }[];
  };
}

export interface V1PartialPremierTeam {
  /** @format uuid */
  id?: string;
  name?: string;
  tag?: string;
  conference?: PremierConferences;
  /**
   * @min 1
   * @max 20
   */
  division?: number;
  affinity?: Affinities;
  region?: Regions;
  losses?: number;
  wins?: number;
  score?: number;
  ranking?: number;
  customization?: {
    icon?: string;
    image?: string;
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
}

export interface V1PremierSearch {
  status?: number;
  data?: V1PartialPremierTeam[];
}

export interface V1PremierLeaderboard {
  status?: number;
  data?: V1PartialPremierTeam[];
}

export interface V1PremierConference {
  status?: number;
  data?: {
    /** @format uuid */
    id?: string;
    affinity?: Affinities;
    pods?: {
      pod?: string;
      name?: string;
    }[];
    region?: Regions;
    timezone?: string;
    name?: PremierConferences;
    icon?: string;
  }[];
}

export interface V1PremierSeason {
  status?: number;
  data?: {
    /** @format uuid */
    id?: string;
    /** @format uuid */
    championship_event_id?: string;
    championship_points_required?: number;
    /** @format date-time */
    starts_at?: string;
    /** @format date-time */
    ends_at?: string;
    /** @format date-time */
    enrollment_starts_at?: string;
    /** @format date-time */
    enrollment_ends_at?: string;
    events?: {
      /** @format uuid */
      id?: string;
      type?: PremierSeasonsEventTypes;
      /** @format date-time */
      starts_at?: string;
      /** @format date-time */
      ends_at?: string;
      conference_schedules?: {
        conference?: PremierConferences;
        /** @format date-time */
        starts_at?: string;
        /** @format date-time */
        ends_at?: string;
      }[];
      map_selection?: {
        type?: PremierSeasonsEventMapSelectionTypes;
        maps?: {
          name?: Maps;
          /** @format uuid */
          id?: string;
        }[];
      };
      points_required_to_participate?: number;
    }[];
  }[];
}

export interface V1QueueStatus {
  status?: number;
  data?: {
    mode?: Modes;
    mode_id?: ModeIds;
    enabled?: boolean;
    team_size?: number;
    number_of_teams?: number;
    party_size?: {
      max?: number;
      min?: number;
      invalid?: number[];
      full_party_bypass?: boolean;
    };
    high_skill?: {
      max_party_size?: number;
      min_tier?: number;
      max_tier?: number;
    };
    ranked?: boolean;
    tournament?: boolean;
    skill_disparity?: {
      tier?: number;
      name?: Tiers;
      max_tier?: {
        id?: number;
        name?: Tiers;
      };
    }[];
    required_account_level?: number;
    game_rules?: {
      overtime_win_by_two?: boolean;
      allow_lenient_surrender?: boolean;
      allow_drop_out?: boolean;
      assign_random_agents?: boolean;
      skip_pregame?: boolean;
      allow_overtime_draw_vote?: boolean;
      overtime_win_by_two_capped?: boolean;
      premier_mode?: boolean;
    };
    platforms?: Platforms[];
    maps?: {
      map?: {
        /** @format uuid */
        id?: string;
        name?: Maps;
      };
      enabled?: boolean;
    }[];
  }[];
}

export interface V1LifetimeMmrHistoryItem {
  /** @format uuid */
  match_id?: string;
  tier?: {
    id?: number;
    name?: Tiers;
  };
  map?: {
    /** @format uuid */
    id?: string;
    name?: Maps;
  };
  season?: {
    /** @format uuid */
    id?: string;
    short?: Seasons;
  };
  ranking_in_tier?: number;
  last_mmr_change?: number;
  elo?: number;
  /** @format date-time */
  date?: string;
}

export interface V1LifetimeMmrHistory {
  status?: number;
  name?: string;
  tag?: string;
  results?: {
    total?: number;
    returned?: number;
    before?: number;
    after?: number;
  };
  data?: V1LifetimeMmrHistoryItem[];
}

export interface V1Account {
  /** @format int32 */
  status?: number;
  data?: {
    puuid?: string;
    region?: string;
    account_level?: number;
    name?: string | null;
    tag?: string | null;
    card?: {
      small?: string;
      large?: string;
      wide?: string;
      id?: string;
    };
    last_update?: string;
    last_update_raw?: number;
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.henrikdev.xyz";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title No title
 * @version 3.0.0
 * @baseUrl https://api.henrikdev.xyz
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  valorant = {
    /**
     * @description Get account details
     *
     * @name V1AccountDetail
     * @request GET:/valorant/v1/account/{name}/{tag}
     */
    v1AccountDetail: (
      name: string,
      tag: string,
      query?: {
        /** Force data update */
        force?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1Account,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/account/${name}/${tag}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get account details
     *
     * @name V1ByPuuidAccountDetail
     * @request GET:/valorant/v1/by-puuid/account/{puuid}
     */
    v1ByPuuidAccountDetail: (
      puuid: string,
      query?: {
        /** Force data update */
        force?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1Account,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/by-puuid/account/${puuid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lifetime matches
     *
     * @name V1ByPuuidLifetimeMatchesDetail
     * @request GET:/valorant/v1/by-puuid/lifetime/matches/{affinity}/{puuid}
     */
    v1ByPuuidLifetimeMatchesDetail: (
      affinity: Affinities,
      puuid: string,
      query?: {
        mode?: ModesApi;
        map?: Maps;
        /** The page used in pagination (if this is used, the size query parameter also have to exist) */
        page?: number;
        /** The amount of returned matches */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1LifetimeMatches,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/by-puuid/lifetime/matches/${affinity}/${puuid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lifetime mmr history
     *
     * @name V1ByPuuidLifetimeMmrHistoryDetail
     * @request GET:/valorant/v1/by-puuid/lifetime/mmr-history/{region}/{puuid}
     */
    v1ByPuuidLifetimeMmrHistoryDetail: (
      region: Affinities,
      puuid: string,
      query?: {
        /** The page used in pagination (if this is used, the size query parameter also have to exist) */
        page?: number;
        /** The amount of mmr changes */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1LifetimeMmrHistory,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/by-puuid/lifetime/mmr-history/${region}/${puuid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get account details
     *
     * @name V3ByPuuidMatchesDetail
     * @request GET:/valorant/v3/by-puuid/matches/{affinity}/{puuid}
     */
    v3ByPuuidMatchesDetail: (
      affinity: Affinities,
      puuid: string,
      query?: {
        mode?: ModesApi;
        /** Available for v3 matches */
        map?: Maps;
        /**
         * Available for v3 matches (how many matches should be returned)
         * @min 1
         * @max 10
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V3Matches,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v3/by-puuid/matches/${affinity}/${puuid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get MMR Details
     *
     * @name V1ByPuuidMmrDetail
     * @request GET:/valorant/v1/by-puuid/mmr/{affinity}/{puuid}
     */
    v1ByPuuidMmrDetail: (affinity: Affinities, puuid: string, params: RequestParams = {}) =>
      this.request<
        V1Mmr,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/by-puuid/mmr/${affinity}/${puuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get MMR Details
     *
     * @name V2ByPuuidMmrDetail
     * @request GET:/valorant/v2/by-puuid/mmr/{affinity}/{puuid}
     */
    v2ByPuuidMmrDetail: (
      affinity: Affinities,
      puuid: string,
      query?: {
        /** Available for v2 MMR */
        season?: Seasons;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V2Mmr,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/by-puuid/mmr/${affinity}/${puuid}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get mmr history
     *
     * @name V1ByPuuidMmrHistoryDetail
     * @request GET:/valorant/v1/by-puuid/mmr-history/{affinity}/{puuid}
     */
    v1ByPuuidMmrHistoryDetail: (affinity: Affinities, puuid: string, params: RequestParams = {}) =>
      this.request<
        V1Mmrh,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/by-puuid/mmr-history/${affinity}/${puuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get content
     *
     * @name V1ContentList
     * @request GET:/valorant/v1/content
     */
    v1ContentList: (
      query?: {
        locale?:
          | "ar-AE"
          | "de-DE"
          | "en-GB"
          | "en-US"
          | "es-ES"
          | "es-MX"
          | "fr-FR"
          | "id-ID"
          | "it-IT"
          | "ja-JP"
          | "ko-KR"
          | "pl-PL"
          | "pt-BR"
          | "ru-RU"
          | "th-TH"
          | "tr-TR"
          | "vi-VN"
          | "zn-CN"
          | "zn-TW";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          version?: string;
          characters?: Content;
          maps?: Content;
          chromas?: Content;
          skins?: Content;
          skinLevels?: Content;
          equips?: Content;
          gameModes?: Content;
          sprays?: Content;
          sprayLevels?: Content;
          charms?: Content;
          charmLevels?: Content;
          playerCards?: Content;
          playerTitles?: Content;
          acts?: {
            name?: string;
            localizedNames?: {
              "ar-AE"?: string;
              "de-DE"?: string;
              "en-GB"?: string;
              "en-US"?: string;
              "es-ES"?: string;
              "es-MX"?: string;
              "fr-FR"?: string;
              "id-ID"?: string;
              "it-IT"?: string;
              "ja-JP"?: string;
              "ko-KR"?: string;
              "pl-PL"?: string;
              "pt-BR"?: string;
              "ru-RU"?: string;
              "th-TH"?: string;
              "tr-TR"?: string;
              "vi-VN"?: string;
              "zn-CN"?: string;
              "zn-TW"?: string;
            }[];
            id?: string;
            isActive?: boolean;
          }[];
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 500 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/content`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Outputs a 1024x1024 pixel image of the requested crosshair
     *
     * @name V1CrosshairGenerateList
     * @request GET:/valorant/v1/crosshair/generate
     */
    v1CrosshairGenerateList: (
      query?: {
        /** ID of the crosshair */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        File,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/crosshair/generate`,
        method: "GET",
        query: query,
        format: "blob",
        ...params,
      }),

    /**
     * @description Returns esports schedule data
     *
     * @name V1EsportsScheduleList
     * @request GET:/valorant/v1/esports/schedule
     */
    v1EsportsScheduleList: (
      query?: {
        /** region of the game (multiple possible) */
        region?:
          | "international"
          | "north america"
          | "emea"
          | "brazil"
          | "japan"
          | "korea"
          | "latin_america"
          | "latin_america_south"
          | "latin_america_north"
          | "southeast_asia"
          | "vietnam"
          | "oceania";
        /** league of the game (multiple possible, these also can be highly dynamic if riot announces new tournaments/leagues) */
        league?:
          | "vct_americas"
          | "challengers_na"
          | "game_changers_na"
          | "vct_emea"
          | "vct_pacific"
          | "challengers_br"
          | "challengers_jpn"
          | "challengers_kr"
          | "challengers_latam"
          | "challengers_latam_n"
          | "challengers_latam_s"
          | "challengers_apac"
          | "challengers_sea_id"
          | "challengers_sea_ph"
          | "challengers_sea_sg_and_my"
          | "challengers_sea_th"
          | "challengers_sea_hk_and_tw"
          | "challengers_sea_vn"
          | "valorant_oceania_tour"
          | "challengers_south_asia"
          | "game_changers_sea"
          | "game_changers_series_brazil"
          | "game_changers_east_asia"
          | "game_changers_emea"
          | "game_changers_jpn"
          | "game_changers_kr"
          | "game_changers_latam"
          | "game_changers_championship"
          | "masters"
          | "last_chance_qualifier_apac"
          | "last_chance_qualifier_east_asia"
          | "last_chance_qualifier_emea"
          | "last_chance_qualifier_na"
          | "last_chance_qualifier_br_and_latam"
          | "vct_lock_in"
          | "champions"
          | "vrl_spain"
          | "vrl_northern_europe"
          | "vrl_dach"
          | "vrl_france"
          | "vrl_east"
          | "vrl_turkey"
          | "vrl_cis"
          | "mena_resilence"
          | "challengers_italy"
          | "challengers_portugal";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1Esportschedule,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/esports/schedule`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Leaderboard
     *
     * @name V1LeaderboardDetail
     * @request GET:/valorant/v1/leaderboard/{affinity}
     */
    v1LeaderboardDetail: (
      affinity: Affinities,
      query?: {
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        puuid?: string;
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        name?: string;
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        tag?: string;
        /** Returns the leaderboard for a specific season */
        season?: Seasons;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1Leaderboard,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 500 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/leaderboard/${affinity}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Leaderboard
     *
     * @name V2LeaderboardDetail
     * @request GET:/valorant/v2/leaderboard/{affinity}
     */
    v2LeaderboardDetail: (
      affinity: Affinities,
      query?: {
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        puuid?: string;
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        name?: string;
        /** Note that you can only filter by puuid or name and tag, both at the same time is logically not possible */
        tag?: string;
        /** Returns the leaderboard for a specific season */
        season?: Seasons;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V2Leaderboard,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 500 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/leaderboard/${affinity}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lifetime matches
     *
     * @name V1LifetimeMatchesDetail
     * @request GET:/valorant/v1/lifetime/matches/{affinity}/{name}/{tag}
     */
    v1LifetimeMatchesDetail: (
      affinity: Affinities,
      name: string,
      tag: string,
      query?: {
        mode?: ModesApi;
        map?: Maps;
        /** The page used in pagination (if this is used, the size query parameter also have to exist) */
        page?: number;
        /** The amount of returned matches */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1LifetimeMatches,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/lifetime/matches/${affinity}/${name}/${tag}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get lifetime mmr changes
     *
     * @name V1LifetimeMmrHistoryDetail
     * @request GET:/valorant/v1/lifetime/mmr-history/{affinity}/{name}/{tag}
     */
    v1LifetimeMmrHistoryDetail: (
      affinity: Affinities,
      name: string,
      tag: string,
      query?: {
        /** The page used in pagination (if this is used, the size query parameter also have to exist) */
        page?: number;
        /** The amount of returned mmr changes */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1LifetimeMmrHistory,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/lifetime/mmr-history/${affinity}/${name}/${tag}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get Match History
     *
     * @name V3MatchesDetail
     * @request GET:/valorant/v3/matches/{affinity}/{name}/{tag}
     */
    v3MatchesDetail: (name: string, tag: string, affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        {
          /** @example 200 */
          status?: number;
          data?: Match[];
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v3/matches/${affinity}/${name}/${tag}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get Match Deatils
     *
     * @name V2MatchDetail
     * @request GET:/valorant/v2/match/{matchId}
     */
    v2MatchDetail: (matchId: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @example 200 */
          status?: number;
          data?: Match;
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/match/${matchId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get MMR History
     *
     * @name V1MmrHistoryDetail
     * @request GET:/valorant/v1/mmr-history/{affinity}/{name}/{tag}
     */
    v1MmrHistoryDetail: (name: string, tag: string, affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        V1Mmrh,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/mmr-history/${affinity}/${name}/${tag}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get mmr details
     *
     * @name V1MmrDetail
     * @request GET:/valorant/v1/mmr/{affinity}/{name}/{tag}
     */
    v1MmrDetail: (name: string, tag: string, affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        V1Mmr,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/mmr/${affinity}/${name}/${tag}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get mmr details
     *
     * @name V2MmrDetail
     * @request GET:/valorant/v2/mmr/{affinity}/{name}/{tag}
     */
    v2MmrDetail: (
      name: string,
      tag: string,
      affinity: Affinities,
      query?: {
        /** Available for v2 mmr only */
        season?: Seasons;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V2Mmr,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/mmr/${affinity}/${name}/${tag}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details about a premier team
     *
     * @name V1PremierDetail
     * @request GET:/valorant/v1/premier/{team_name}/{team_tag}
     */
    v1PremierDetail: (teamName: string, teamTag: string, params: RequestParams = {}) =>
      this.request<
        V1PremierTeam,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/${teamName}/${teamTag}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get match history of a premier team
     *
     * @name V1PremierHistoryDetail
     * @request GET:/valorant/v1/premier/{team_name}/{team_tag}/history
     */
    v1PremierHistoryDetail: (teamName: string, teamTag: string, params: RequestParams = {}) =>
      this.request<
        V1PremierTeamHistory,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/${teamName}/${teamTag}/history`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get details about a premier team
     *
     * @name V1PremierDetail2
     * @request GET:/valorant/v1/premier/{team_id}
     * @originalName v1PremierDetail
     * @duplicate
     */
    v1PremierDetail2: (teamId: string, params: RequestParams = {}) =>
      this.request<
        V1PremierTeam,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/${teamId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get match history of a premier team
     *
     * @name V1PremierHistoryDetail2
     * @request GET:/valorant/v1/premier/{team_id}/history
     * @originalName v1PremierHistoryDetail
     * @duplicate
     */
    v1PremierHistoryDetail2: (teamId: string, params: RequestParams = {}) =>
      this.request<
        V1PremierTeamHistory,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/${teamId}/history`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Search for current active premier teams
     *
     * @name V1PremierSearchList
     * @request GET:/valorant/v1/premier/search
     */
    v1PremierSearchList: (
      query?: {
        name?: string;
        tag?: string;
        /**
         * @min 1
         * @max 20
         */
        division?: number;
        conference?: PremierConferences;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        V1PremierSearch,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of all premier conferences
     *
     * @name V1PremierConferencesList
     * @request GET:/valorant/v1/premier/conferences
     */
    v1PremierConferencesList: (params: RequestParams = {}) =>
      this.request<
        V1PremierConference,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/conferences`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of all premier seasons
     *
     * @name V1PremierSeasonsDetail
     * @request GET:/valorant/v1/premier/seasons/{affinity}
     */
    v1PremierSeasonsDetail: (affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        V1PremierSeason,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/seasons/${affinity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a combined leaderboard in the affinity, sorted by div and ranking
     *
     * @name V1PremierLeaderboardDetail
     * @request GET:/valorant/v1/premier/leaderboard/{affinity}
     */
    v1PremierLeaderboardDetail: (affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        V1PremierLeaderboard,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/leaderboard/${affinity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a combined leaderboard in the conference, sorted by div and ranking
     *
     * @name V1PremierLeaderboardDetail2
     * @request GET:/valorant/v1/premier/leaderboard/{affinity}/{conference}
     * @originalName v1PremierLeaderboardDetail
     * @duplicate
     */
    v1PremierLeaderboardDetail2: (affinity: Affinities, conference: PremierConferences, params: RequestParams = {}) =>
      this.request<
        V1PremierLeaderboard,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/leaderboard/${affinity}/${conference}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a combined leaderboard in the conference, sorted by ranking in that div
     *
     * @name V1PremierLeaderboardDetail3
     * @request GET:/valorant/v1/premier/leaderboard/{affinity}/{conference}/{division}
     * @originalName v1PremierLeaderboardDetail
     * @duplicate
     */
    v1PremierLeaderboardDetail3: (
      affinity: Affinities,
      conference: PremierConferences,
      division: number,
      params: RequestParams = {},
    ) =>
      this.request<
        V1PremierLeaderboard,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/premier/leaderboard/${affinity}/${conference}/${division}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of all available queues and their metadata
     *
     * @name V1QueueStatusDetail
     * @request GET:/valorant/v1/queue-status/{affinity}
     */
    v1QueueStatusDetail: (affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        V1QueueStatus,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 410 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 501 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/queue-status/${affinity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get unchanged response from the valorant api
     *
     * @name V1RawCreate
     * @request POST:/valorant/v1/raw
     */
    v1RawCreate: (
      data: {
        /**
         * Can also be an array
         * @example "matchdetails"
         */
        type?: string;
        /** @example "696848f3-f16f-45bf-af13-e2192f81a600" */
        value?: string;
        /** @example "eu" */
        region?: string;
        queries?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        void,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/raw`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Server status
     *
     * @name V1StatusDetail
     * @request GET:/valorant/v1/status/{affinity}
     */
    v1StatusDetail: (affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        {
          /** @example 200 */
          status?: number;
          /** @example "eu" */
          region?: string;
          data?: {
            maintenances?: Status;
            incidents?: Status;
          };
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/status/${affinity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V1StoreFeaturedList
     * @request GET:/valorant/v1/store-featured
     */
    v1StoreFeaturedList: (params: RequestParams = {}) =>
      this.request<
        V1Storefeatured,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/store-featured`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V2StoreFeaturedList
     * @request GET:/valorant/v2/store-featured
     */
    v2StoreFeaturedList: (params: RequestParams = {}) =>
      this.request<
        V2Storefeatured,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/store-featured`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V1StoreOffersList
     * @request GET:/valorant/v1/store-offers
     */
    v1StoreOffersList: (params: RequestParams = {}) =>
      this.request<
        any,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/store-offers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V2StoreOffersList
     * @request GET:/valorant/v2/store-offers
     */
    v2StoreOffersList: (params: RequestParams = {}) =>
      this.request<
        V2Storeoffers,
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v2/store-offers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V1VersionDetail
     * @request GET:/valorant/v1/version/{affinity}
     */
    v1VersionDetail: (affinity: Affinities, params: RequestParams = {}) =>
      this.request<
        {
          /** @example 200 */
          status?: number;
          data?: {
            /** @example "04.00.00.655657" */
            version?: string;
            /** @example "release-04.00-shipping-20-655657" */
            clientVersion?: string;
            /** @example "release-04.00" */
            branch?: string;
            /** @example "EU" */
            region?: string;
          };
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/version/${affinity}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name V1WebsiteDetail
     * @request GET:/valorant/v1/website/{countryCode}
     */
    v1WebsiteDetail: (
      countryCode:
        | "en-us"
        | "en-gb"
        | "de-de"
        | "es-es"
        | "es-mx"
        | "fr-fr"
        | "it-it"
        | "ja-jp"
        | "ko-kr"
        | "pt-br"
        | "ru-ru"
        | "tr-tr"
        | "vi-vn",
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 200 */
          status?: number;
          data?: {
            /** @example "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta99717d4afdf4126/61ddd1a0997c0e224de0a718/01132022-VANILLE-BTS_Article-banner.jpg" */
            banner_url?: string;
            /** @example "community" */
            category?: string;
            /** @example "2022-01-13T11:00:00.000Z" */
            date?: string;
            /** @example "https://www.youtube.com/watch?v=YRFwQy-dZ4o" */
            external_link?: string | null;
            /** @example "Die Stimme von Neon // VALORANT" */
            title?: string;
            /** @example "https://playvalorant.com/de-de/news/community/meet-the-voice-of-neon-valorant/" */
            url?: string;
          }[];
        },
        | {
            /** @example 400 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 403 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 404 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 408 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 429 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
        | {
            /** @example 503 */
            status?: number;
            errors?: {
              message?: string;
              code?: number;
              details?: string;
            }[];
          }
      >({
        path: `/valorant/v1/website/${countryCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}

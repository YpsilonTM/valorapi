// Interfaces and Types

export type Episodes = 'e1a1' | 'e1a2' | 'e1a3' | 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3'
export type LeaderboardEpisodes = 'e2a1' | 'e2a2' | 'e2a3' | 'e3a1' | 'e3a2' | 'e3a3' | 'e4a1' | 'e4a2' | 'e4a3' | 'e5a1' | 'e5a2' | 'e5a3'
export type Modes = 'escalation' | 'spikerush' | 'deathmatch' | 'competitive' | 'unrated' | 'replication' | 'custom' | 'newmap' | 'snowball'
export type Maps = 'ascent' | 'split' | 'fracture' | 'bind' | 'breeze' | 'icebox' | 'haven' | 'pearl'
export type CCRegions = 'en-gb' | 'en-us' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn'
export type Locales = 'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW'
export type RawTypes = 'competitiveupdates' | 'mmr' | 'matchdetails' | 'matchhistory'
export type MMRVersions = 'v1' | 'v2'
export type FeaturedItemsVersion = 'v1' | 'v2'
export type LeaderboardVersions = 'v1' | 'v2'
export type Regions = 'eu' | 'na' | 'kr' | 'ap' | 'latam' | 'br'

export interface ErrorDetail {
  message: 'string'
  code: number
  details: 'string'
}

export interface AccountData {
  puuid: string
  region: string
  account_level: number
  name: string
  tag: string
  card: {
    small: string
    large: string
    wide: string
    id: string
  }
  last_update: string
  last_update_raw: number
}

export interface MMRData {
  name: string
  tag: string
  current_data: {
    currenttier: number
    currenttier_patched: string
    images: { small: string; large: string; triangle_down: string; triangle_up: string }
    ranking_in_tier: number
    mmr_change_to_last_game: number
    elo: number
    old: boolean
  }
  highest_rank: {
    old: boolean
    tier: number
    patched_tier: string
    season: string
  }
  by_season: Record<
    string,
    {
      error: boolean
      wins: number
      number_of_games: number
      final_rank: number
      final_rank_patched: string
      act_rank_wins: {
        patched_tier: string
        tier: number
      }[]
      old: boolean
    }
  >
}

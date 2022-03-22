# Kirby - Curb Your Internet Usage

A simple Chrome extension that lets you block websites:

1. Indefinitely
2. For specific times during the day or week

## TODO

- [ ] Design default popup UI
- [ ] Design data format for Chrome storage insertions
- [ ] URL validation
- [ ] Add support for blocking on specific days of the week. Within each day, be able to specify blocked times

## Chrome Storage Format

```
{
  ...,
  'kirbySites': {
    'example.com': {
      'isPermaBlocked': false,
      'days': [
        'mon': {
          'start': 9,
          'end': 22,
        },
        'thur': {
          'start': 8,
          'end': 18,
        }
      ]
    },
    'anotherexample.com': {
      'isPermaBlocked': true
    }
  },
  ...,
}
```
